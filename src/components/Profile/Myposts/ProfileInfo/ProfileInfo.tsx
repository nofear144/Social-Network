import React from "react";
import s from "./ProfileInfo.module.css"
import {ResponseProfileType} from "../../ProfileContainer";


type ProfilePropsType = {
    profile: ResponseProfileType
}

const ProfileInfo = (props:ProfilePropsType) => {
    return (
        <div>
            <img className={s.imgProfile}
                 src="https://proprikol.ru/wp-content/uploads/2019/08/kartinki-na-zadnij-fon-38.jpg" alt="background"
                 width="1000" height="400"/>
            <div className={s.discription}>
                <img src={props.profile.photos.large}/>
                Ava+discription
            </div>
        </div>
    )
}
export default ProfileInfo;