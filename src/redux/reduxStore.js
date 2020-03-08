import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer';

const reducers = combineReducers(
    {profilePage: profileReducer, 
    dialogsPage: dialogsReducer, 
    friendsPage: friendsReducer, 
    usersPage: usersReducer, 
    authReducer: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
applyMiddleware(thunkMiddleware)
));


export default store;