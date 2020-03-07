import {userAPI, profileAPI} from '../api/api'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [{
        id: 1,
        message: "Hi! How are you?",
        like: 12,
        comment: 9999
    },
    {
        id: 2,
        message: "It's my first page",
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
        message: "Mike",
        like: 12,
        comment: 9999
    },
    {
        id: 5,
        message: "Tom",
        like: 12,
        comment: 9999
    },
    {
        id: 6,
        message: "Miles",
        like: 12,
        comment: 9999
    },
    {
        id: 7,
        message: "Vika",
        like: 12,
        comment: 9999
    },
],

profile: null,
status: ''
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id:5,
                message: action.newPostText,
                like: 12,
                comment: 9999,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
           //в state profile page, поэтому обращаемся просто к state     
            
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

        default: 
            return state;
    }
    
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
});

export const setStatus = (status) => ({
    type: SET_STATUS, status
});


export const getUserProfileThunk = (userId) => (dispatch) => {
    userAPI.getProfile(userId)
    .then(response => {
        dispatch(setUserProfile(response.data));
});
};


export const getStatusThunk = (userId) => (dispatch) => {
    debugger
    profileAPI.getStatus(userId)
    .then(response => {
        dispatch(setStatus(response.data));
});
};

export const updateStatusThunk = (status) => (dispatch) => {
    debugger;
    profileAPI.updateStatus(status)
    .then(response => {
        if(response.data.resultCode === 0) {
        dispatch(setStatus(status));}
});
};

export default profileReducer;