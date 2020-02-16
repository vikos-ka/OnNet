import React from 'react';
import style from './Settings.module.css';


function Settings() {
    return(
        <section className = { style.settings }>
        <div className = { style.cover }></div>

        <div className = { style.user }>Ava + disc</div>
      </section>
    );
}
export default Settings;