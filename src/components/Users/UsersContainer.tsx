import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {rootReducerType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, userType} from "../../redux/users-reducer";



let mapStateToProps = (state: rootReducerType) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: userType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

//Types

export type UsersContainerType = {
    users: userType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: userType[]) => void
}