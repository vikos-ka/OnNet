import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Users.module.css';
import userPhoto from '../../assets/img/user.png';

const User = (props) => {
    return (
        <div key={props.user.id} className = {style.user__box}>
                 <div className={style.user__info}>
                    <figure>
                        <NavLink to = {'/profile/' + props.user.id}>
                            <img src={props.user.photos.small != null? props.user.photos.small : userPhoto} alt="user" />
                        </NavLink>
                    </figure>
                </div>
                <div className={style.user__about}>
                <div className={style.user__name}>{props.user.name}</div>
           
        {
        props.user.followed
            ?<button disabled = {props.followingInProgress.some(id => id === props.user.id)} onClick={()=> 
            { 
                props.unfollow(props.user.id);
            }}
                 className="btn btn-primary" type="submit">Unfollow</button>
            :<button disabled = {props.followingInProgress.some(id => id === props.user.id)} onClick={()=>
            {
                props.follow(props.user.id)
            }}
            
            className="btn btn-primary"  type="submit">Follow</button>}

        </div>

    </div>
    )
}

export default User;
