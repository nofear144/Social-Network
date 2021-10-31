import React from "react";

import Profile from "./Profile";

import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/profile-reducer";
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
            userId = "2"
        }
        this.props.getProfile(+userId)
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
    profilePage: state.profile.profile,
})

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {setUserProfile, getProfile})
)(ProfileComponent)


/*let AuthRedirectComponent = withAuthRedirect(ProfileComponent)*/
/*let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);
 connect(mapStateToProps, {setUserProfile, getProfile})(withUrlDataContainerComponent)*/


//Types

export type ProfileContainerType = {

    getProfile: (userId: number) => void
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


