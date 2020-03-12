import React from 'react';
import style from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer.js'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

    return(
      <section className = { style.profile }>
        <ProfileInfo 
          profile = {props.profile} 
          status = {props.status} 
          isOwner={props.isOwner} 
          updateStatus = {props.updateStatus} 
          savePhoto={props.savePhoto} 
          saveProfile = {props.saveProfile} />    
        <MyPostsContainer  
        store = {props.store}/>   
      </section>
    );
}
export default Profile;