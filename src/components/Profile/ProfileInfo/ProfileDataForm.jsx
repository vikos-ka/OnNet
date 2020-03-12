import React from 'react';
import { Input, CreateField, Textarea } from '../../common/Forms';
import { reduxForm } from 'redux-form';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit = {handleSubmit}>
          <div className="editForm form-group">{error && <div>{error}</div>}
          <div>
            {CreateField ('Full name', 'fullName', [], Input)}
          </div>
          <div>
            { CreateField('', 'lokingForAJob', [], Input, {type: 'checkbox', className: 'form-check-input'}) }
            <span>Looking for a job</span>
          </div>
          <div>
            { CreateField('My professional skills', 'lookingForAJobDescription', [], Textarea ) }
          </div>
          <div>
              { CreateField('About me', 'aboutMe', [], Textarea ) }
          </div>
        <div><span>Contacts:</span> </div>
          {Object.keys(profile.contacts)
            .map( (key) => {
              return <div key = {key}>
                <span>{key}: </span>
                {CreateField(key, 'contacts.' + key, [], Input)}
              </div>
               }
           )}
           <button className="btn btn-outline-primary btn-lg mt-3">save</button>
           </div>
       </form>
    )
  }

const ReduxProfileForm = reduxForm({
    form: 'editProfile'
})(ProfileDataForm)

export default ReduxProfileForm