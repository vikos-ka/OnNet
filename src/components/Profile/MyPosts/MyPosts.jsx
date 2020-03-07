import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthcreator} from '../../../utils/validators/validators'
import { Textarea } from '../../common/Forms';

const maxLength10 = maxLengthcreator(10);

const AddNewPostForm = (props) => {
    return (
        <div className={style.newPost}>
                <span id="createPost">Create Post</span>
                <div className= {style.postBox}>
                    <figure>
						<img src="https://via.placeholder.com/50" alt="admin" />
					</figure>
                    <form onSubmit = {props.handleSubmit}>
			            <Field component = {Textarea} name ="newPostText" validate = {[required, maxLength10]} placeholder="Share some what you are thinking?" />
                <ul>
                    <li className = {style.liItems}>
                        <li>
						<i className="fa fa-map-marker" />
					    </li>
					    <li>
						    <i className="fa fa-music" />
					    </li>
					    <li>
						    <i className="fa fa-image" />
					    </li>
						<li>
						    <i className="fa fa-video-camera" />
					    </li>
					    <li>
						    <i className="fa fa-camera" />
					    </li>
                    </li>
					
					<li className={style.preview}>
	                    <button  className={style.previewBtn} type="submit" data-ripple="">Preview</button>
					</li>
				</ul>
                <button id = {style.btn} type = "submit">Post</button>
                </form></div>
         </div>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)


const MyPosts = (props) => {

    const postsItems = props.posts.map( post => 
                        <Post 
                            id = {post.id} 
                            message = {post.message} 
                            like = {post.like} 
                            comment = {post.comment} 
                        />)

    const onAddPost = (values) => {  
        props.addPost(values.newPostText);
    }

    return(
        <div className ={style.posts}>
            <AddNewPostFormRedux onSubmit = {onAddPost}/>
        <div className = {style.posts}>
            {postsItems}

        </div>
        </div>    
    );
}
export default MyPosts;