import React, { useState } from 'react';
import style from './Post.module.css';
import placeholder from '../../../../assets/img/user.png';

const Post = (props) => {
    
    const [count, setCount] = useState(props.like);
    return(
        
    
        <div className= {style.post}>
            <div className = {style.postAndAuthor}>
                <img className = {style.postAuthor} src = {props.userPhoto || placeholder} alt="Author"/>
                <div className = {style.postText}> 
                    <p>{props.message}</p> 
                </div>
            </div>
            <div className = {style.likeComment}>
                <span onClick = {() => setCount(count + 1)}><i className="fas fa-heart"></i> {count}</span>
                <span><i className="fas fa-comment-dots"></i> { props.comment}</span>
            </div>
        </div>
    );
}
export default Post;