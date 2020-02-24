import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios'
import userPhoto from '../../assets/img/user.png'



class UsersC extends React.Component {
    //constructor(props) {} можно не писать, так как, класс только и делае, что возвращает разметку
    //constructor(props) {
    //    super(props);
    //}

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => this.props.setUsers(response.data.items));
    }

    render() {
        return (
            <div className={style.users__page}>
        {
        this.props.users.map( user => 
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
                ?<button onClick={()=> {this.props.unfollow( user.id )}} className={style.btn} type="submit">Unfollow</button>
                :<button onClick={()=> {this.props.follow( user.id )}}className={style.btn} type="submit">Follow</button>}

 

            </div>)
        }
        </div>
        )
    }

}


export default UsersC;