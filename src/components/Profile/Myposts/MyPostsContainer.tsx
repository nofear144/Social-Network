import {rootReducerType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, changeNewTextAC, PostsType} from "../../../redux/state";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

export type MyPostsContainerType = {
    posts: PostsType
    newPostText: string
    addPost: (newPostText: string) => void,
    changeNewText: (text: string) => void
}

export const mapStateToProps = (state: rootReducerType) => {
    return {
        posts: state.profile.posts,
        newPostText: state.profile.newPostText,
    }
}
export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },
        changeNewText: (text: string) => {
            dispatch(changeNewTextAC(text))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)