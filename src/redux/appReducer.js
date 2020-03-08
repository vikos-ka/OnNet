import {authUserThunk} from './authReducer'

const INITIALISED_SUCCESS = 'app/INITIALISED_SUCCESS';

const initialState = {
    initialised: false,
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALISED_SUCCESS: {
            return {...state, 
                initialised: true}
        }
        default: 
            return state;
    }
}

export const initialisedSuccess = () => ({type:INITIALISED_SUCCESS});

export const initialiseThunk = () => (dispatch) => {
    const promise = dispatch(authUserThunk());
    Promise.all([promise])
    .then( () => dispatch(initialisedSuccess()))
     
}



export default appReducer;