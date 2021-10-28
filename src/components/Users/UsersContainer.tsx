import React from "react";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC, ResponseType,
    setCurrentPageAC,
    setCurrentPageTotalCountAC, setPreloaderStatusAC,
    setUsersAC,
    unfollowAC,
    userType
} from "../../redux/users-reducer";
import axios from "axios";
import {UsersPresentationComponent} from "./UsersPresentationComponent";
import preloader from "../../images/loading-svgrepo-com.svg"


export class UsersApiComponent extends React.Component<UsersContainerType> {
    constructor(props: UsersContainerType) {
        super(props);
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        if (this.props.users.length === 0) {
            this.props.setPreloaderStatus(true)
            axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(res => {
                    this.props.setPreloaderStatus(false)
                    this.props.setUsers(res.data.items)
                    this.props.setTotalCurrentUsers(res.data.totalCount)
                })
        }

    }

    onChangePage = (page: number) => {
        this.props.setPreloaderStatus(true)
        this.props.setCurrentPage(page)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(res => this.props.setUsers(res.data.items));
        this.props.setPreloaderStatus(false)

    }

    render() {
        return <>
            {this.props.isFetching
                ? <img src={preloader}/>
                : <UsersPresentationComponent
                    onChangePage={this.onChangePage}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    pageSize={this.props.pageSize}
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
        setTotalCurrentUsers: (count: number) => {
            dispatch(setCurrentPageTotalCountAC(count))
        },
        setPreloaderStatus: (status: boolean) => {
            dispatch(setPreloaderStatusAC(status))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent)

//Types

export type UsersContainerType = {
    isFetching: boolean
    pageSize: number
    currentPage: number
    totalUsersCount: number
    users: userType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (page: number) => void
    setTotalCurrentUsers: (count: number) => void
    setPreloaderStatus: (status: boolean) => void
}