const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';


const initialState = {

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
]
}



const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6,
                    message: body}]
            }
        }
        default: 
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });


export default dialogsReducer;