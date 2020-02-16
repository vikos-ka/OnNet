import React from 'react';
import style from './News.module.css';


function News() {
    return(
        <section className = { style.news }>
        <div className = { style.cover }></div>

        <div className = { style.user }>Ava + disc</div>
      </section>
    );
}
export default News;