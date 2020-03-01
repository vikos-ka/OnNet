import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {


    return (
        <header className = {style.header}>
          <div className = {style.logo}>
            <a href = "#" alt = "logo"><i className="fas fa-power-off"></i>nNet</a>
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

        <div className = {style.profile}>
          <div className = {style.user__photo}></div>
          <div className = {style.user__name}></div>
        </div>
        <div className={style.login__block}>
          {props.isAuth 
            ? props.login 
            : <NavLink to = {'/login'}>Login</NavLink>}
        </div>
      </header>
    )
}
export default Header;