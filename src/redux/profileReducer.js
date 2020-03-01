const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'



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
newPostText: "",
profile: null
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id:5,
                message: state.newPostText,
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
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case SET_USER_PROFILE: {
            return{
                ...state,
                profile: action.profile
            }
        }
        default: 
            return state;
    }
    
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})

export const updateNewPostTextActionCreator = (text) => ({

        type: UPDATE_NEW_POST_TEXT, 
        newText: text
});


export default profileReducer;