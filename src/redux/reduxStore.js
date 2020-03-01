import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import authReducer from './authReducer'

let reducers = combineReducers({profilePage: profileReducer, dialogsPage: dialogsReducer, friendsPage: friendsReducer, usersPage: usersReducer, authReducer: authReducer});

let store = createStore(reducers);

export default store;