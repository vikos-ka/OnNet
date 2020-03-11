import React from 'react';
import style from './ProfileInfo.module.css';
import { useState, useEffect } from 'react';



const ProfileStatuswithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activateEdit = () => {
        setEditMode(true)
    }

    const deActivateEdit = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
         <> 
             {!editMode && 
                 <div className = {style.profile__status }>
                    Status: <span onDoubleClick = {activateEdit}>{props.status 
                    || 'No status'}</span>
                 </div>
                }
            {editMode && 
                <div className = {style.profile__statusEdit }> 
                    <input onChange = {onStatusChange} onBlur = {deActivateEdit} autoFocus = {true} type="text"
                    value = {status} />
                 </div>
                }
            </>
        );
}

export default ProfileStatuswithHooks