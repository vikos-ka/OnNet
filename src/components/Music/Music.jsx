import React from 'react';
import style from './Music.module.css';


function Music() {
    return(
        <section className = { style.music }>
        <div className = { style.cover }></div>

        <div className = { style.user }>Ava + disc</div>
      </section>
    );
}
export default Music;