import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Users from './Users';
import {follow, unfollow, setCurrentPage,toggleFollowingProgress, getUsersThunkCreator} from '../../redux/usersReducer';
import Preloader from '../common/preloader.jsx';
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingProgress } from '../../redux/usersSelectors'


class UserContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsersThunkCreator(currentPage, pageSize);
    }

    onPageChanged = (page) => {
        this.props.getUsersThunkCreator(page, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching? <Preloader /> : null}
            <Users totalUsersCount = {this.props.totalUsersCount} 
                pageSize = {this.props.pageSize} 
                currentPage = {this.props.currentPage} 
                onPageChanged = {this.onPageChanged} 
                users = {this.props.users} 
                follow = {this.props.follow} 
                unfollow = {this.props.unfollow}
                followingInProgress = {this.props.followingInProgress}/>
            </>
    }

}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingProgress(state),
    }  
}

export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsersThunkCreator,toggleFollowingProgress}),
)(UserContainer);
