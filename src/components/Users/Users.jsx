import React from 'react';
import style from './Users.module.css';
import User from './User';
import Preloader from '../common/preloader.jsx';
import Paginator from '../common/Paginator';

const Users = (props) => {

    return (
        props.isFetching? <div className = {style.preloader__container}><Preloader /></div> 
        : <div className={style.users__container}>
            <div className = {style.paginator}>
            <Paginator 
                currentPage = {props.currentPage} onPageChanged = {props.onPageChanged} 
                totalItemsCount = {props.totalUsersCount} pageSize = {props.pageSize} />
            </div>
            <div className={style.users__page}>
           
            {props.users.map( user => 
                <User key = {user.id} 
                    user = {user} 
                    follow = {props.follow} 
                    followingInProgress = {props.followingInProgress} 
                    unfollow = {props.unfollow} />
            )
    }
    </div>
    </div>
    )
}

export default Users;