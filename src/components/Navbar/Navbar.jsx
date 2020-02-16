import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom'


function Navbar() {
    return (
      
        <nav className = {style.nav}>
          <ul>
          <li className = {style.item}><NavLink to="/profile"><i className="fas fa-user-circle"></i>My profile</NavLink></li>
          <li className = {style.item}><NavLink to="/dialogs"><i className="fas fa-envelope"></i>Dialogs</NavLink></li>
          <li className = {style.item}><NavLink to="/news"><i className="fas fa-rss"></i>News</NavLink></li>
          <li className = {style.item}><NavLink to="/music"><i className="fas fa-headphones-alt"></i>Music</NavLink></li>
          <li className = {style.item}><NavLink to ="/settings"><i className="fas fa-cogs"></i>Settings</NavLink></li>
        </ul>
        </nav>
    );
}
export default Navbar;