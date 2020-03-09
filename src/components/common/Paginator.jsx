import React, { useState } from 'react';
import style from './Paginator.module.css';


const Paginator = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }   

    const portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;
  
    return <div className = {style.pages}>
        {portionNumber > 1 && <button className = {style.btn}onClick = { () => {setPortionNumber(portionNumber - 1)}}><i className="fas fa-chevron-circle-left" /></button>}
            {pages
            .filter( (page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map( (page) => {

        return <span key = {page} onClick = {(e) => {onPageChanged(page);
             }} className = {currentPage === page? style.selected__page: style.page}> {page} </span>})}

            {portionCount > portionNumber && <button className = {style.btn} onClick = { () => {setPortionNumber(portionNumber + 1)}}><i className="fas fa-chevron-circle-right"/></button>}
        </div>

    
}

export default Paginator;
