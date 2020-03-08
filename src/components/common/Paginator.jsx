import React from 'react';
import style from './Paginator.module.css';

const Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }   
  
    return <div className = {style.pages}>
            {pages.map( page => {
        return <span key = {page} onClick = {(e) => {onPageChanged(page);
             }} className = {currentPage === page? style.selected__page: style.page}> {page} </span>})}
             </div>
    
    
}

export default Paginator;
