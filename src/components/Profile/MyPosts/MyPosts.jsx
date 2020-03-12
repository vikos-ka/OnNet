import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/Forms';


const AddNewPostForm = (props) => {
    return (
        <div className={style.newPost}>
                
                <div className= {style.postBox}>
                    <h5 id="createPost">Create Post</h5>
                    <form onSubmit = {props.handleSubmit}>
			            <Field component = {Textarea} name ="newPostText" placeholder="Share some what you are thinking?" />
                    <ul className = {style.liItems}>
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
				</ul>
                <button className= "btn btn-outline-primary" id = {style.btn} type = "submit">Post</button>
                </form></div>
         </div>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)


const MyPosts = React.memo(props => {

    const postsItems = props.posts.map( post => 
                        <Post 
                            id = {post.id} 
                            message = {post.message} 
                            like = {post.like} 
                            comment = {post.comment}
                            key = {post.id} 
                            
                        />).reverse();

    const onAddPost = (values) => {  
        props.addPost(values.newPostText);
    }

    return(
        <div className ={style.posts}>
            <AddNewPostFormRedux onSubmit = {onAddPost}/>
        <div className = {style.postItems}>
            {postsItems}
        </div>
        </div>    
    );
})

export default MyPosts;