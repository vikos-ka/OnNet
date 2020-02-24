import React from 'react';
import style from './Users.module.css';

const Users = (props) => {

    return (



        <div className={style.users}>
            



	        <div className={style.user__info}>
		        <div className= {style.main__info}>
                    <figure>
			            <img src="https://via.placeholder.com/100" alt="user" />
		            </figure>
	                <div className={style.user__name}>Jack</div>
                </div>   
                <div className={style.user__about}></div>
            </div>
		    <button id = {style.btn} type="submit">Subscribe</button>
        </div>
    )
}

export default Users;
