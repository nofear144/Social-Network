import React from "react";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {
    follow, isButtonDisabled,
    setCurrentPage,
    setCurrentPageTotalCount, setPreloaderStatus,
    setUsers,
    unfollow,
    userType
} from "../../redux/users-reducer";

import {UsersPresentationComponent} from "./UsersPresentationComponent";
import preloader from "../../images/loading-svgrepo-com.svg"
import {usersAPI} from "../../api/api";


export class UsersComponent extends React.Component<UsersContainerType> {
    constructor(props: UsersContainerType) {
        super(props);
    }

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setPreloaderStatus(true)
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => {
                    this.props.setPreloaderStatus(false)
                    this.props.setUsers(data.items)
                    this.props.setCurrentPageTotalCount(data.totalCount)
                })
        }
    }


    onChangePage = (page: number) => {
        this.props.setPreloaderStatus(true)
        this.props.setCurrentPage(page)
        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => this.props.setUsers(data.items));
        this.props.setPreloaderStatus(false)

    }

    render() {
        return <>
            {this.props.isFetching
                ? <img src={preloader}/>
                : <UsersPresentationComponent
                    isDisabled={this.props.isDisabled}
                    onChangePage={this.onChangePage}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    pageSize={this.props.pageSize}
                    isButtonDisabled={this.props.isButtonDisabled}
                />
            }
        </>
    }

}

let mapStateToProps = (state: rootReducerType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isDisabled: state.usersPage.isDisabled
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setCurrentPageTotalCount,
    setPreloaderStatus,
    isButtonDisabled
})(UsersComponent)

//Types

export type UsersContainerType = {
    isDisabled: boolean
    isFetching: boolean
    pageSize: number
    currentPage: number
    totalUsersCount: number
    users: userType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (page: number) => void
    setCurrentPageTotalCount: (count: number) => void
    setPreloaderStatus: (status: boolean) => void
    isButtonDisabled: (status: boolean) => void
}
export type ResponseType = {
    items: userType[]
    totalCount: number,
    error: string,
}