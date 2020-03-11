import {authAPI, securityAPI} from '../api/api'
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL';

const initialState = {
    usersId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null 
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, 
                ...action.data,
                isAuth: true}
        }

        case GET_CAPTCHA_URL: {
            return {...state, 
                ...action.payload}
        }
        default: 
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: { userId, email, login, isAuth }});

export const getCaptcha = (captcha) => ({type: GET_CAPTCHA_URL, data: { captcha }});

export const authUserThunk = () => async (dispatch) => {
   const response = await authAPI.me();
    if (response.data.resultCode ===0) {
      const {id, email, login} = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }   
}

export const loginThunk = (email, password, rememberMe, captcha) => async (dispatch) => {
    
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode ===0) {
        dispatch(authUserThunk());
    } else  {

        if (response.data.resultCode === 10) {
            dispatch(getCaptcha());
        }
      const message = response.data.messages.length > 0? response.data.messages[0] : 'some error'
      dispatch(stopSubmit("login", {_error: message}));
    }
}


export const getCaptchaThunk = () => async (dispatch) => {
    
    const response = await securityAPI.getCaptcha();
    const captcha = response.data.url;
    
    dispatch(getCaptcha(captcha));

}

export const logoutThunk = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode ===0) {
        dispatch(setAuthUserData(null, null, null, false))
    }   
}

export default authReducer;