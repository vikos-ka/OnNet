import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios'
import userPhoto from '../../assets/img/user.png'

const Users = (props) => {

  if (props.users.length === 0) {

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => props.setUsers(response.data.items));
}
return (
    <div className={style.users__page}>

    {
    props.users.map( user => 
        <div key={user.id} className = {style.user__box}>
            <div className={style.user__info}>
                <figure>
                    <img src={user.photos.small != null? user.photos.small : userPhoto} alt="user" />
                </figure>
            </div>
            <div className={style.user__about}>
                <div className={style.user__name}>{user.name}</div>
                <div className={style.location__city}>{"user.location.city"}</div>
                <div className={style.location__country}>{"user.location.country"}</div>
            </div>
            {
            user.followed
                ?<button onClick={()=> {props.unfollow( user.id )}} className={style.btn} type="submit">Unfollow</button>
                :<button onClick={()=> {props.follow( user.id )}}className={style.btn} type="submit">Follow</button>}

 

    </div>)
    }
</div>
)
}

export default Users;