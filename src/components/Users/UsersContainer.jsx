import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {follow, unfollow, setCurrentPage,toggleFollowingProgress, getUsersThunkCreator} from '../../redux/usersReducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Preloader from '../common/preloader.jsx';
import { compose } from 'redux';


class UserContainer extends React.Component {
    //constructor(props) {} можно не писать, так как, класс только и делае, что возвращает разметку
    //constructor(props) {
    //    super(props);
    //}

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }  
}

/*const mapDispatchToProps = (dispatch) => {
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
        },
        setCurrentPage: (pageNumber) => {
            const action = setCurrentPageAC(pageNumber);
            dispatch(action)
        },
        setTotalUsersCount: (totalCount) => {
            const action = setTotalUsersCountAC(totalCount);
            dispatch(action)
        },
        toggleIsFetching: (isFetching) => {
            const action = toggleIsFetchingAC(isFetching);
            dispatch(action)
        },

    }
}
*/
export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsersThunkCreator,toggleFollowingProgress}),
)(UserContainer);
