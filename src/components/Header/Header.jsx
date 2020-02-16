import React from 'react';
import style from './Header.module.css';

const Header = () => {
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

        <div className = {style.profileIcon}>
          <div className = {style.userPhoto}></div>
          <div className = {style.userName}></div>
        </div>
      </header>
    )
}
export default Header;