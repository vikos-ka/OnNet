import {authAPI} from '../api/api'
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';

const initialState = {
    usersId: null,
    email: null,
    login: null,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, 
                ...action.data,
                isAuth: true}
        }
        default: 
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: { userId, email, login, isAuth }});

export const authUserThunk = () => async (dispatch) => {
   const response = await authAPI.me();
    if (response.data.resultCode ===0) {
      const {id, email, login} = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }   
}

export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
    
    const response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode ===0) {
        dispatch(authUserThunk());
    } else {
      const message = response.data.messages.length > 0? response.data.messages[0] : 'some error'
      dispatch(stopSubmit("login", {_error: message}));
    }  

}

export const logoutThunk = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode ===0) {
        dispatch(setAuthUserData(null, null, null, false))
    }   
}

export default authReducer;