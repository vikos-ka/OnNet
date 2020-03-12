import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {Redirect} from 'react-router-dom'
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/Forms';
import {required, maxLengthcreator} from '../../utils/validators/validators'


const maxLength50 = maxLengthcreator(50);

const Dialogs = (props) => { 
    debugger;

    let state = props.dialogsPage;


    let dialogItems = state.dialogs.map( dialog => 
                        <Dialog id = {dialog.id} name = {dialog.name}/>)
    let messageItems = state.messages.map( message => 
                        <Message id = {message.id} message = {message.message} />)


    const addNewMessage = (values) =>{
        props.sendMessage(values.newMessageBody)
        
      
    }
    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <section className = {style.messagesAndDialogs}>
            
            <div className = {style.dialogItems}>

                <h4>Dialogs</h4>
                {dialogItems} 
            </div>

            <div className = {style.messages}>
                <h4>Messages</h4>
                <div className = {style.message__Item}>{messageItems}</div>
                    <NewMessageFormRedux onSubmit = {addNewMessage}/>            
            </div>
        </section>
    )
};


const NewMessageForm = (props) => {
        return (
        <form className = {style.newMessage} onSubmit = {props.handleSubmit}>
			
            <div className ={style.text_area}>
                <Field component = {Textarea} validate = {[ required, maxLength50]} name = "newMessageBody" 
                placeholder="Write a message" />
                 <button className = "btn" type= "submit" ><i className="fa fa-paper-plane-o"></i></button>
            </div>
        </form>
    );
}

const NewMessageFormRedux = reduxForm({form: 'dialogNewMessageForm'})(NewMessageForm);

export default Dialogs;