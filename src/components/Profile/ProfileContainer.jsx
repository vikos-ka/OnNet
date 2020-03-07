import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileThunk, getStatusThunk, updateStatusThunk } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
   

    componentDidMount() {
        debugger;
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
   
    render() {
        return(
        <Profile {...this.props} 
            profile = {this.props.profile} 
            status = {this.props.status} 
            updateStatus = {this.props.updateStatusThunk}/>
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
    connect(mapStateToProps, {getUserProfileThunk, getStatusThunk, updateStatusThunk}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);
