import React from "react";
import s from "./usersClassComponent.module.css";
import {userType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";



//Types
export type UsersPresentationComponent = {
    isDisabled: boolean
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
                            ? <button disabled={props.isDisabled}
                                      onClick={() => {
                                          props.unfollow(u.id)
                                      }
                                      }>Unfollow
                            </button>


                            : <button disabled={props.isDisabled}
                                      onClick={() => {
                                          props.follow(u.id)
                                      }}>Follow
                            </button>
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