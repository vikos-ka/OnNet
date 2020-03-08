import React from 'react';
import style from './Users.module.css';
import User from './User'
import Paginator from '../common/Paginator';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }   
  
    return (
        <div className={style.users__page}>
           <Paginator currentPage = {props.currentPage} onPageChanged = {props.onPageChanged} totalUsersCount = {props.totalUsersCount} pageSize = {props.pageSize} />
            {props.users.map( user => 
                <User key = {user.id} 
                    user = {user} 
                    follow = {props.follow} 
                    followingInProgress = {props.followingInProgress} 
                    unfollow = {props.unfollow} />
            )
    }
    </div>
    )
}

export default Users;