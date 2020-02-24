import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const Dialogs = (props) => { 
    debugger;

    let state = props.dialogsPage;


    let dialogItems = state.dialogs.map( dialog => 
                        <Dialog id = {dialog.id} name = {dialog.name}/>)
    let messageItems = state.messages.map( message => 
                        <Message id = {message.id} message = {message.message} />)


    const onSendMessage = () => {
        props.sendMessage();
    }

    const onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.updateNewMessageBody(body);
      
    }
    
    return (
        <section className = {style.messagesAndDialogs}>
            
            <div className = {style.dialogItems}>

                <h2>Dialogs</h2>
                {dialogItems} 
            </div>

            <div className = {style.messages}>
                <h2>Messages</h2>
                <div className = {style.message__Item}>{messageItems}</div>
                <div className = {style.newMessage}>
			
						<div className ={style.text_area}>
                            <textarea onChange = {onNewMessageChange}  rows="2" placeholder="Write a message" value = {props.newMessageBody}/>
                             <button onClick = 
                             {onSendMessage} type= "submit" ><i class="fa fa-paper-plane-o"></i></button>
						</div>
												
				
				</div>              
            </div>
        </section>
    )
};


export default Dialogs;