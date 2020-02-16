import React from 'react';
import style from './ProfileInfo.module.css';

function ProfileInfo() {
    return(
        <div className = { style.profile }>
          <div className = { style.cover }></div>

          <div className = { style.user }>Ava + disc</div>
      </div>
    );
}
export default ProfileInfo;