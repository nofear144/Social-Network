import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./Myposts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";
import {ResponseProfileType} from "./ProfileContainer";


export type ProfilePropsType = {
    profile:ResponseProfileType
    status:string
    updateStatus:(status:string)=>void
}
const Profile = (props:ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}
export default Profile;