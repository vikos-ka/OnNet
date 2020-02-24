import React from 'react';
import style from './Friends.module.css';
import Friend from './Friend'

const Friends = (props) => {
    let friendsItems = props.friends.map( friend => <Friend id ={friend.id} name = {friend.name} ava = {friend.ava}/>)

    return(
        <section className={style.friendsPage}>
            {friendsItems}
        </section>
    );
}

export default Friends;