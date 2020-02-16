import React from 'react';
import style from './Post.module.css';

const Post = (props) => {

    
    return(

    
        <div className= {style.post}>
            <div className = {style.postAndAuthor}>
                <img className = {style.postAuthor} src = "https://via.placeholder.com/80" />
                <p className = {style.postText}> {props.message} </p>
            </div>
            <div className = {style.likeComment}>
                <span><i class="fas fa-heart"></i> { props.like}</span>
                <span><i class="fas fa-comment-dots"></i> { props.comment}</span>
            </div>
        </div>
    );
}
export default Post;