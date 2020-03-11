import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className = {style.header__container}>
          <div className = {style.logo}>
            <span><i className="fas fa-power-off"></i>nNet</span>
          </div>

          <div className = {style.serviceBar}>
            <div className={style.topSearch}>
              <form action="" method="post">
                <input type="text" placeholder = "Search People, Groups, Pages etc"/>
                <button id = {style.searchBtn}>
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>

          </div>

        <div className={style.login__block}>
            {props.isAuth 
            ? <div className = {style.login}><span>{props.login}</span><button className ="btn btn-primary" onClick = {props.logoutThunk}>Logout</button></div>
            : <NavLink to = {'/login'}><button className ="btn btn-primary">Login</button></NavLink>}
        </div>
      </header>
    )
}
export default Header;