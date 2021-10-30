import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./Myposts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";
import {profilePageType} from "../../redux/state";
import {ResponseProfileType} from "./ProfileContainer";


export type ProfilePropsType = {
    profile:ResponseProfileType
}
const Profile = (props:ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;