import React from "react";
import {connect} from "react-redux";
import {Users} from "./UsersClassComponent";
import {rootReducerType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setCurrentPageTotalCountAC,
    setUsersAC,
    unfollowAC,
    userType
} from "../../redux/users-reducer";


let mapStateToProps = (state: rootReducerType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))

        },
       setTotalCurrentUsers:(count:number)=>{
            dispatch(setCurrentPageTotalCountAC(count))
       }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

//Types

export type UsersContainerType = {
    pageSize: number
    currentPage: number
    totalUsersCount: number
    users: userType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (page: number) => void
    setTotalCurrentUsers: (count: number) => void
}