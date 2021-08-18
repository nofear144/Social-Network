import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    let postArray=[
        {id:1, message:"Hello man ,How are u?",value:10},
        {id:2, message:"It's my first post",value:15},
        {id:3, message:"It's my first post",value:112},
        {id:4, message:"It's my first post",value:14}
    ]
    let mappedPost= postArray.map((p)=>{
        return  <Post message ={p.message} value={p.value}/>
    })
    return (
        <div>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add new post</button>
                </div>
            </div>
            <div className={s.posts}>
                {mappedPost}
            </div>
        </div>
    )
}
export default MyPosts;