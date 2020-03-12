import React from 'react';
import { useState } from 'react';

import style from './ProfileInfo.module.css';
import Preloader from '../../common/preloader';
import placeholder from '../../../assets/img/user.png';
import ProfileStatuswithHooks from './ProfileStatuswithHooks';
import ProfileDataForm from './ProfileDataForm'
import ProfileData from './ProfileData'


const ProfileInfo = ({profile, savePhoto, isOwner,updateStatus, status, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    const activateEdit = () => {
        setEditMode(true)
    }

  if (!profile) {
    return <Preloader />
  }

  const mainPhotoSelected = (e) => {
    if(e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = async (formData) => {
    await saveProfile(formData);
    setEditMode(false);
  }

    return(
  
        <div className = { style.profile }>
							<div className={style.your__page}>
                <div className={style.user__photo}>
								<figure>
                	<img src={
                    profile.photos.large || 
                   placeholder} alt="avatar" />
                   {isOwner && 
                    <div className="mt-3 input-group mb-3">
                      <div className ="custom-f</div>ile"> 
                        <input type="file" onChange = {mainPhotoSelected}className ="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                        <label className ="custom-file-label" htmlFor="inputGroupFile01">Change photo</label>
                      </div>
                    </div>}
								</figure>
                <ProfileStatuswithHooks status ={status} updateStatus = {updateStatus} />
                </div>
                <div className={style.user__info}>
                    <h2><i className="fas fa-info-circle"></i>About</h2>
                  { editMode 
                  ? <ProfileDataForm profile = {profile} initialValues = {profile} onSubmit = {onSubmit} />
                  :  <ProfileData profile = {profile} isOwner = {isOwner} activateEdit = {activateEdit} />
                  }

    
                </div>
								</div>
						</div>
   
    );
}


export default ProfileInfo;