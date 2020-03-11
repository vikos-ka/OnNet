import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileThunk, getStatusThunk, updateStatusThunk, savePhotoThunk, saveProfile } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
   
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorisedUserId;
            if(!userId) {
                this.props.history.push('/login')
            }
        }
         this.props.getUserProfileThunk(userId);
         this.props.getStatusThunk(userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }
   
    render() {
        return(
        <Profile {...this.props} 
            isOwner = {!this.props.match.params.userId}
            profile = {this.props.profile} 
            status = {this.props.status} 
            savePhoto = {this.props.savePhotoThunk}
            updateStatus = {this.props.updateStatusThunk}
            saveProfile = {this.props.saveProfile}/>
        );
        }

}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.authReducer.userId,
    isAuth: state.authReducer.isAuth

});

export default compose(
    connect(mapStateToProps, {getUserProfileThunk, getStatusThunk, updateStatusThunk, savePhotoThunk, saveProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);
