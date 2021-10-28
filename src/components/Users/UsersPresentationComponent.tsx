import React from "react";
import s from "./usersClassComponent.module.css";
import {UsersContainerType} from "./UsersContainer";
import {userType} from "../../redux/users-reducer";

//Types
export type UsersPresentationComponent = {
    onChangePage:(page:number)=>void
    totalUsersCount:number
    pageSize:number
    currentPage:number
    users:userType[]
    follow:(userId: number) => void
    unfollow:(userId: number) => void

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

        {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photo && u.photo.small} className={s.photo}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>
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