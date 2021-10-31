import React from "react";
import s from "./usersClassComponent.module.css";

import { userType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


//Types
export type UsersPresentationComponent = {
    isDisabled:boolean
    onChangePage: (page: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: userType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    isButtonDisabled: (status: boolean) => void

}


export const UsersPresentationComponent = (props: UsersPresentationComponent) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>
        <div>
            {pages.map(p => <span className={props.currentPage === p ? s.selectedPage : ""}
                                  onClick={() => props.onChangePage(p)}>
                    {p}
                </span>)}
        </div>

        {
            props.users.map(u => <div key={u.id}>

                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                        <img
                            src={u.photos ? u.photos.small : 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg'}
                            className={s.photo}/>
                            </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.isDisabled} onClick={() => {
                                props.isButtonDisabled(true)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "395bb44f-c5cd-48fe-9fde-631834ccd660"
                                    }
                                })
                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                    })
                                props.isButtonDisabled(false)
                            }}>Unfollow</button>


                            : <button disabled={props.isDisabled} onClick={() => {
                                props.isButtonDisabled(true)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "395bb44f-c5cd-48fe-9fde-631834ccd660"
                                    }
                                })
                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
                                props.isButtonDisabled(false)
                            }}>Follow</button>
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