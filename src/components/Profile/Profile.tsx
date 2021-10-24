import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./Myposts/ProfileInfo/ProfileInfo";
import {ActionType, PostsType} from "../../redux/state";


export type ProfilePropsType={
    posts:PostsType

    newPostText:string
}
const Profile = (props:ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts

                posts={props.posts}
                newPostText={props.newPostText}
            />
        </div>
    )
}
export default Profile;