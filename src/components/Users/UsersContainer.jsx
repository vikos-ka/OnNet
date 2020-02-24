import React from 'react';
import { connect } from 'react-redux';
import UsersC from './UsersC'
import { setUsersAC, followAC, unfollowAC } from '../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }  
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            const action = followAC(userId);
            dispatch(action)
        },
        unfollow: (userId) => {
            const action = unfollowAC(userId);
            dispatch(action)
        },
        setUsers: (users) => {
            const action = setUsersAC(users);
            dispatch(action)
        }
    }
}



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

export default UsersContainer;
