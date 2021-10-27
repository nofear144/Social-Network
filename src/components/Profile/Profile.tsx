import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./Myposts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";


/*export type ProfilePropsType={
    posts:PostsType
    newPostText:string
}*/
const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;