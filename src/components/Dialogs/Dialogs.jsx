import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';



const Dialogs = (props) => { 


    let dialogItems = props.dialogs.map( dialog => 
                        <Dialog id = {dialog.id} name = {dialog.name}/>)
    let messageItems = props.messages.map( message => 
                        <Message id = {message.id} message = {message.message} />)
    
    return (
        <section className = {style.messagesAndDialogs}>
            
            <div className = {style.dialogItems}>

                <h2>Dialogs</h2>
                {dialogItems} 
            </div>

            <div className = {style.messages}>
                <h2>Messages</h2>
                {messageItems}

                <div className = {style.newMessage}>
                    <input type="text"/>
                    <button type= "submit" ><i class="fa fa-paper-plane-o"></i></button>
                </div>
            </div>
        </section>
    )
};


export default Dialogs;