import React from 'react';
import Dialogs from './Dialogs'
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialogsReducer';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage ,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            const action = updateNewMessageBodyActionCreator(body);
            dispatch(action); //action объект, кторый приходит в store
        },

        sendMessage: () => {
            const action = sendMessageActionCreator();
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;