import React from 'react';
import style from './Friends.module.css';


const Friend = (props) => {
return (
    <div className={style.friendBox}>
        <figure>
            <span>followers: 120</span>
        </figure>
    <div className={style.friendPage}>
        <img src={props.ava} alt="friends" />
        <div className={style.friendName}>
            <a href="#" title="">{props.name}</a>
            <span>California, USA</span>
        </div>
        <ul className={style.friendInfo}>
            <li><span>Friends:</span> 223 (2 mutual friends)</li>
            <li><span>Videos:</span> 240</li>
            <li><span>Photos:</span> 144</li>
            <li><span>Post:</span> 250</li>
            <li><span>Since:</span> December, 2014</li>
        </ul>
        <a className={style.sendMessage} href="#" title="">Message</a>
    </div>
</div>
)
}



export default Friend;