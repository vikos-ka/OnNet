import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post.jsx'






const MyPosts = (props) => {

    let postsItems = props.posts.map( post => 
                        <Post 
                            id = {post.id} 
                            message = {post.message} 
                            like = {post.like} 
                            comment = {post.comment} 
                        />)

    return(
        <div className ={style.posts}>
            <div className={style.newPost}>
                <span id="createPost">Create Post</span>
                <div className="postBox">
                    <figure>
						<img src="https://via.placeholder.com/50" alt="admin" />
					</figure>
                    <form method="post">
			            <textarea rows="2" placeholder="Share some what you are thinking?"></textarea>
				    </form>
                </div>
                <ul>
                    <li className = {style.liItems}>
                        <li>
						<   i className="fa fa-map-marker"></i>
					    </li>
					    <li>
						    <i className="fa fa-music"></i>
					    </li>
					    <li>
						    <i className="fa fa-image"></i>
					    </li>
						<li>
						    <i className="fa fa-video-camera"></i>
					    </li>
					    <li>
						    <i className="fa fa-camera"></i>
					    </li>
                    </li>
					
					<li className={style.preview}>
	                    <button className={style.previewBtn} type="submit" data-ripple="">Preview</button>
					</li>
				</ul>
                <button id = {style.btn} type = "submit">Post</button>
            </div>
        <div className = {style.posts}>
            {postsItems}

        </div>
        </div>    
    );
}
export default MyPosts;