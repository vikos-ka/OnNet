import React from 'react';
import { Input, CreateField, Textarea } from '../../common/Forms';
import { reduxForm } from 'redux-form';
import style from './ProfileInfo.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form  onSubmit = {handleSubmit}>
          <button>save</button>
          <div>{error && <div>{error}</div>}</div>
          <div>Full name: {CreateField ('Full name', 'fullName', [], Input)}</div>
        <div>
          Looking for a job: { CreateField('', 'lokingForAJob', [], Input, {type: 'checkbox'}) }
        </div>
          <div>My proffesional skills: { CreateField('My professional skills', 'lookingForAJobDescription', [], Textarea ) }</div>
        <div>
          About me: { CreateField('About me', 'aboutMe', [], Textarea ) }
        </div>
        <div>Contacts:
          {Object.keys(profile.contacts)
            .map( (key) => {
              return <div key = {key}>
                <span>{key}: </span>
                {CreateField(key, 'contacts.' + key, [], Input)}
              </div>
               }
           )}
        </div>
    </form>
    )
  }

const ReduxProfileForm = reduxForm({
    form: 'editProfile'
})(ProfileDataForm)

export default ReduxProfileForm