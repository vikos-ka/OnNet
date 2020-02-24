import React from 'react';
import style from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

    return(
      <section className = { style.profile }>
        <ProfileInfo />    
        <MyPostsContainer  store = {props.store} />   
      </section>
    );
}
export default Profile;