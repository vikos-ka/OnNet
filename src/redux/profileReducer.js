import { userAPI, profileAPI } from '../api/api';

import { stopSubmit } from 'redux-form';


const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SET_USER_PHOTO = 'profile/SET_USER_PHOTO';

const initialState = {
    posts: [{
        id: 1,
        message: "Hi! How are you?",
        like: 5,
        comment: 10
    },
    {
        id: 2,
        message: "It's my React App",
        like: 40,
        comment: 1
    },
    {
        id: 3,
        message: "Some text",
        like: 12,
        comment: 9999
    },
    {
        id: 4,
        message: "Hola, amigos!",
        like: 3,
        comment: 5
    }
],

profile: null,
status: ''
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: Math.ceil(Math.random() * 100)+ 8,
                message: action.newPostText,
                like: 12,
                comment: 9999,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }

        case DELETE_POST: {
            return{
                ...state,
                posts: state.posts.filter( post => post.id !== action.postId)
            }
        }

        case SET_USER_PROFILE: {
            return{
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case SET_USER_PHOTO: {
            return {
                ...state,
               profile: {...state.profile, photos: action.photos}
            }
        }

        default: 
            return state;
    }
    
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });

export const deletePostActionCreator = (postId) => ({ type: DELETE_POST, postId });

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
});

export const setStatus = (status) => ({
    type: SET_STATUS, status
});

export const setUserPhoto = (photos) => ({
    type: SET_USER_PHOTO, photos
});


export const getUserProfileThunk = (userId) => 
    async (dispatch) => {
    const response =  await userAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
};


export const getStatusThunk = (userId) => async (dispatch) => {
  
    const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));

};

export const updateStatusThunk = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0) {
        dispatch(setStatus(status));}
        
}

export const savePhotoThunk = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if(response.data.resultCode === 0) {
        dispatch(setUserPhoto(response.data.data.photos));}
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().authReducer.userId;
    const response = await profileAPI.saveProfile(profile);
    if(response.data.resultCode === 0) {
        dispatch(getUserProfileThunk(userId));
    } else {
        const message = response.data.messages.length > 0? response.data.messages[0] : 'some error';
        dispatch(stopSubmit("editProfile", {_error: message}))
      }  

};


export default profileReducer;