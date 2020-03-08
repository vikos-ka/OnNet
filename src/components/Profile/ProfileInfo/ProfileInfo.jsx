import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/preloader';
import placeholder from '../../../assets/img/user.png';
import ProfileStatuswithHooks from './ProfileStatuswithHooks'


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }
    return(
  
        <div className = { style.profile }>
          <div className = { style.user }>Ava + disc
							<h4 className ={style.user__name}>Your page</h4>	
							<div className={style.your__page}>
                <div className={style.user__photo}>
								<figure>
                	<img src={
                    props.profile.photos.large 
                      ? props.profile.photos.large 
                      : placeholder} alt="avatar" />
								</figure>
                </div>
                <div className="user__info">
                  <ProfileStatuswithHooks status ={props.status} updateStatus = {props.updateStatus} />
                </div>
								</div>
						</div>

          </div>
   
    );
}
export default ProfileInfo;