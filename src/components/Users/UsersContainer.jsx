import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import * as axios from 'axios';
import { setUsers, follow, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching , toggleFollowingProgress} from '../../redux/usersReducer';
import Preloader from '../common/preloader.jsx';
import { getUsers } from '../../api/api';


class UsersCont extends React.Component {
    //constructor(props) {} можно не писать, так как, класс только и делае, что возвращает разметку
    //constructor(props) {
    //    super(props);
    //}

    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount)
        })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        getUsers(page, this.props.pageSize).then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.items)
        });
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
                toggleFollowingProgress = {this.props.toggleFollowingProgress}
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


const UsersContainer = connect(mapStateToProps, 
    { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress})
    (UsersCont) // вместо mapDispatchtoProps

export default UsersContainer;
