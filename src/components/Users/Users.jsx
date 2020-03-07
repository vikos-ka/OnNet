import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/img/user.png';
import {NavLink} from 'react-router-dom';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }   
  
    return (
        <div className={style.users__page}>
            <div className = {style.pages}>
            {pages.map( page => {
        return <span onClick = {(e) => {props.onPageChanged(page);
             }} className = {props.currentPage === page? style.selected__page: style.page}> {page} </span>})}
             </div>
            {props.users.map( user => 
            <div key={user.id} className = {style.user__box}>
                 <div className={style.user__info}>
                    <figure>
                        <NavLink to = {'/profile/' + user.id}>
                            <img src={user.photos.small != null? user.photos.small : userPhoto} alt="user" />
                        </NavLink>
                    </figure>
                </div>
                <div className={style.user__about}>
                <div className={style.user__name}>{user.name}</div>
                <div className={style.location__city}>{"user.location.city"}</div>
                <div className={style.location__country}>{"user.location.country"}</div>
            </div>
        {
        user.followed
            ?<button disabled = {props.followingInProgress.some(id => id === user.id)} onClick={()=> 
            { 
                props.unfollow(user.id);
            }}
                 className={style.btn} type="submit">Unfollow</button>
            :<button disabled = {props.followingInProgress.some(id => id === user.id)} onClick={()=>
            {
                props.follow(user.id)
            }}
            
            className={style.btn} type="submit">Follow</button>}



        </div>)
    }
    </div>
    )
}

export default Users;