const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {

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
}



const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6,
                    message: body}]


            }
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        default: 
            return state;
    }

}


export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyActionCreator = (body) => ({

    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer;