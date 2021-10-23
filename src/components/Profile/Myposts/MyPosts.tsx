import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionType, addPostAC, changeNewTextAC, PostsType} from "../../../redux/state";


export type MyPostsPropsType = {
    posts: PostsType
    dispatch: (action: ActionType) => void
    newPostText: string
}


const MyPosts = (props: MyPostsPropsType) => {

    let mappedPost = props.posts.map((p) => {
        return <Post message={p.message} value={p.value}/>
    })

    let newPost = () => {

        props.dispatch(addPostAC(props.newPostText))


    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;

        props.dispatch(changeNewTextAC(text))

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