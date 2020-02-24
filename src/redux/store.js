import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";

let store = {
    
    _state: {

        profilePage: {
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
            newPostText: "Hello"
        },
   
        dialogsPage: {
            dialogs: [{
                    id: 1, name: "Max"
                },
                {
                    id: 2, name: "Oliver"
                },
                {
                    id: 3, name: "Andrew"
                },
                {
                    id: 4, name: "Mike"
                },
                {
                    id: 5, name: "Tom"
                },
                {
                    id: 6, name: "Miles"
                },
                {
                    id: 7, name: "Vika"
                },
            ],
   
            messages: [{
                    id: 1, message: "Hello"
                },
                {
                    id: 2, message: "Hi"
                },
                {
                    id: 3, message: "Yo"
                },
                {
                    id: 4,
                    message: "How are you"
                },
                {
                    id: 5, message: "What's up"
                },
                {
                    id: 6, message: "Miles"
                },
                {
                    id: 7, message: "Vika"
                },
            ],
            newMessageBody: ""
        },
        users: {
   
           admin: {
               id: 7,
               name: "Vika",
               ava: "https://klike.net/uploads/posts/2019-06/1561878096_2.jpg"
           
           },
           friendsPage: [
               {
                   id: 1,
                   name: "Max",
                   ava: "https://klike.net/uploads/posts/2019-06/1561878174_4.jpg"
               },
               {
                   id: 2,
                   name: "Oliver",
                   ava: "https://klike.net/uploads/posts/2019-06/1561878099_15.jpg"
               },
               {
                   id: 3,
                   name: "Andrew",
                   ava: "https://klike.net/uploads/posts/2019-06/1561878174_4.jpg"
               },
               {
                   id: 4,
                   name: "Mike",
                   ava: "https://klike.net/uploads/posts/2019-06/1561878096_2.jpg"
               },
               {
                   id: 5,
                   name: "Tom",
                   ava: "https://www.meme-arsenal.com/memes/b1960e7d08b8a78c37bfce0dfb980651.jpg"
               },
               {
                   id: 6,
                   name: "Miles",
                   ava: "https://klike.net/uploads/posts/2019-06/1561878099_15.jpg"
               }  
           ]
        }
    },

    getState() {
        return this._state
    },
    
    _callSubscriber () {
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action) { // {action fron UI}

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._state.users.friendsPage = friendsReducer(this._state.users.friendsPage, action);
       
    this._callSubscriber(this._state);

    }

}


 export default store;
 window.store = store;