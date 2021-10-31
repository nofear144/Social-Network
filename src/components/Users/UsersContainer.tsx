import React from "react";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {
    follow,
    followSuccess, getUsers, isButtonDisabled,
    setCurrentPage,
    setCurrentPageTotalCount, setPreloaderStatus,
    setUsers, unfollow,
    unfollowSuccess,
    userType
} from "../../redux/users-reducer";
import {UsersPresentationComponent} from "./UsersPresentationComponent";
import preloader from "../../images/loading-svgrepo-com.svg"


export class UsersComponent extends React.Component<UsersContainerType> {
    constructor(props: UsersContainerType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }


    onChangePage = (page: number) => {
        this.props.getUsers(page, this.props.pageSize)
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
    unfollow,
    follow,
    followSuccess,
    unfollowSuccess,
    setUsers,
    setCurrentPage,
    setCurrentPageTotalCount,
    setPreloaderStatus,
    isButtonDisabled,
    getUsers
})(UsersComponent)

//Types

export type UsersContainerType = {
    isDisabled: boolean
    isFetching: boolean
    pageSize: number
    currentPage: number
    totalUsersCount: number
    users: userType[]
    followSuccess: (userId: number) => void
    unfollowSuccess: (userId: number) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (page: number) => void
    setCurrentPageTotalCount: (count: number) => void
    setPreloaderStatus: (status: boolean) => void
    isButtonDisabled: (status: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}
export type ResponseType = {
    items: userType[]
    totalCount: number,
    error: string,
}