import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostsContainerType} from "./MyPostsContainer";





const MyPosts = (props: MyPostsContainerType) => {
    let mappedPost = props.posts.map((p) => {
        return <Post message={p.message} value={p.value}/>
    })

    let newPost = () => {
        props.addPost(props.newPostText)
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.changeNewText(text)
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