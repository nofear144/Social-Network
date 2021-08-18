import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./Myposts/ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}
export default Profile;