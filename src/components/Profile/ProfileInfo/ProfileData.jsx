import React from 'react';
import style from './ProfileInfo.module.css';


const ProfileData = ({profile, isOwner, activateEdit }) => {
    return ( 
       <>
        <div>
          <i className="fas fa-user"></i>
          <span>Full name:</span> {profile.fullName}
        </div>
        <div><i className="fas fa-briefcase"></i>
        <span>Looking for a job:</span>
          {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob && 
          <div><i className="fas fa-exclamation"></i>
            <span>My proffesional skills:</span> {profile.lookingForAJobDescription}</div>}
        <div>
        <i className="fas fa-info-circle"></i>
          <span>About me: </span>{profile.aboutMe }
        </div>
        <div>
          <span>Contacts:</span>
          {Object.keys(profile.contacts)
            .map( (key) => {
              return <Contact className = "ml-6 contact" key = {key}
                contactTitle = {key} 
                contactValue = {profile.contacts[key]}
                /> }
           )}
        </div>
        {isOwner && <div><button className="btn btn-outline-primary btn-lg mt-3 ml-4" onClick = {activateEdit} >Edit</button></div>}
      </>
    )
  }

const Contact = ({contactTitle, contactValue}) => {
    return <div className = {style.contact} ><i className = {contactTitle ==='mainLink' || contactTitle === "website" ? 'fas fa-share-alt' : `fab fa-${contactTitle}`}></i><span>{contactTitle} </span>: {contactValue}</div>
 }

export default ProfileData;