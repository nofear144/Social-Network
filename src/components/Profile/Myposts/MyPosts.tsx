import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionType, addPostAC, changeNewTextAC, PostsType} from "../../../redux/state";
import {useDispatch} from "react-redux";


export type MyPostsPropsType = {
    posts: PostsType
    newPostText: string
}



const MyPosts = (props: MyPostsPropsType) => {
    let dispatch=useDispatch()
    let mappedPost = props.posts.map((p) => {
        return <Post message={p.message} value={p.value}/>
    })

    let newPost = () => {

        dispatch(addPostAC(props.newPostText))


    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;

       dispatch(changeNewTextAC(text))

    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={newPost}>Add new post</button>
                </div>
            </div>
            <div className={s.posts}>
                {mappedPost}
            </div>
        </div>
    )
}
export default MyPosts;