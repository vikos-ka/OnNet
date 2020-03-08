import { userAPI } from '../api/api';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'users/FOLLOWING_IN_PROGRESS'



const initialState = {
    users: [
    ],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, 
                            users: state.users.map( u => {
                                if (u.id === action.userId) {
                                    return {...u, 
                                        followed: true}
                                }
                                return u;
                            })
                }
        }
        case UNFOLLOW: {
            return {...state, 
                     users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, 
                            followed: false}
                    }
                    return u;
                })
            }
        }

        case SET_USERS: {
            return {...state, users: [...action.users]}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        
        case FOLLOWING_IN_PROGRESS: {
            return {...state, followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)}
        } 

        default: 
            return state;
    }
    
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });

export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const toggleIsFetching = (isFetching) =>({type: TOGGLE_IS_FETCHING, isFetching});

export const toggleFollowingProgress = (isFetching, userId) =>({type: FOLLOWING_IN_PROGRESS, isFetching, userId});

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});

export const getUsersThunkCreator = (page, pageSize) => {
 return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    const response = await userAPI.getUsers(page, pageSize)
        
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
    }
};


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
        dispatch(toggleFollowingProgress(true, userId));
        const response = await apiMethod(userId)
            if (response.data.resultCode === 0) {
                dispatch(actionCreator( userId ));
            }
        dispatch(toggleFollowingProgress(false, userId));
 }


export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), followSuccess );
    }

}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), unfollowSuccess );
        }
}


export default usersReducer;