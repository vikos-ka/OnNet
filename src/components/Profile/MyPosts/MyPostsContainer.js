import MyPosts from './MyPosts'
import { addPostActionCreator} from '../../../redux/profileReducer'
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }  
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            const action = addPostActionCreator(newPostText);
            dispatch(action)
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);



export default MyPostsContainer;