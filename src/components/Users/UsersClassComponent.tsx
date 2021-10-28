import React from "react";
import s from "./usersClassComponent.module.css"
import {UsersContainerType} from "./UsersContainer";
import axios from "axios";
import {ResponseType} from "../../redux/users-reducer";


export class Users extends React.Component<UsersContainerType> {
    constructor(props: UsersContainerType) {
        super(props);
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(res => {
                    this.props.setUsers(res.data.items)
                    this.props.setTotalCurrentUsers(res.data.totalCount)
                })
        }

    }

    onChangePage = (page: number) => {
        this.props.setCurrentPage(page)
            axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
                .then(res => this.props.setUsers(res.data.items));

    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => <span className={this.props.currentPage === p ? s.selectedPage : ""}
                                      onClick={() => this.onChangePage(p)}>
                    {p}
                </span>)}
            </div>
            {this.props.users &&
            this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photo && u.photo.small} className={s.photo}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => this.props.follow(u.id)}>Follow</button>
                        }

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                  <span>
                        <div>u.location.country</div>
                        <div>u.location.city</div>
                    </span>
                </span>
            </div>)
            }
        </div>
    }

}