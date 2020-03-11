import React from 'react';
import style from './ProfileInfo.module.css';


const ProfileData = ({profile, isOwner, activateEdit }) => {
    return ( 
       <>
       {isOwner && <div><button onClick = {activateEdit} >Edit</button></div>}
        <div>Full name: {profile.fullName}</div>
        <div>
          Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob && 
          <div>My proffesional skills: {profile.lookingForAJobDescription}</div>}
        <div>
          About me: {profile.aboutMe }
        </div>
        <div>Contacts:
          {Object.keys(profile.contacts)
            .map( (key) => {
              return <Contact key = {key}
                contactTitle = {key} 
                contactValue = {profile.contacts[key]}
                /> }
           )}
        </div>
      </>
    )
  }

const Contact = ({contactTitle, contactValue}) => {
    return <div>{contactTitle} : {contactValue}</div>
 }

export default ProfileData;