import React from "react";

import Profile from "./Profile";

import {connect} from "react-redux";
import {getProfile, getStatus, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {rootReducerType} from "../../redux/redux-store";
import {photosType} from "../../redux/users-reducer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileComponent extends React.Component<PropsType> {

    constructor(props: PropsType) {
        super(props);
    }


    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "19599"
        }
        this.props.getProfile(+userId)
        this.props.getStatus(+userId)

    }


    render() {
        return (
            <div>
                <Profile
                    profile={this.props.profilePage}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: rootReducerType) => ({
    profilePage: state.profile.profile,
    status:state.profile.status,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile, getProfile,getStatus,updateStatus}),
    withRouter,
    //withAuthRedirect,

)(ProfileComponent)




//Types

export type ProfileContainerType = {
    getStatus:(userId:number)=>void
    updateStatus:(status:string)=>void
    getProfile: (userId: number) => void
    status:string
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


