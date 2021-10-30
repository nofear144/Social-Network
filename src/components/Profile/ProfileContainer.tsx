import React from "react";

import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {rootReducerType} from "../../redux/redux-store";
import {photosType} from "../../redux/users-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


class ProfileComponent extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "14"
        }
        axios.get<ResponseProfileType>(`https://social-network.samuraijs.com/api/1.0//profile/${userId}`)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
    }


    render() {
        return (
            <div>
                <Profile profile={this.props.profilePage}/>
            </div>
        )
    }
}

let mapStateToProps = (state: rootReducerType) => ({
    profilePage: state.profile.profile
})
let withUrlDataContainerComponent = withRouter(ProfileComponent);
export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)


//Types

export type ProfileContainerType = {
    profilePage: ResponseProfileType
    setUserProfile: (profile: ResponseProfileType) => void
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ResponseProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: photosType

}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType


