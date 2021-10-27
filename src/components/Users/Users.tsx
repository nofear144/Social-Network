import React from "react";
import s from "./users.module.css"
import axios from "axios";
import {ResponseType} from "../../redux/users-reducer";
import {UsersContainerType} from "./UsersContainer";


export let Users = (props: UsersContainerType) => {

    if (props.users.length === 0) {
        axios.get<ResponseType>("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => props.setUsers(res.data.items))
    }

    return <div>
        {props.users &&
        props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photo && u.photo.small } className={s.photo}/>
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
                {/*  <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>*/}
                </span>
        </div>)
        }
    </div>
}