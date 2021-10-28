import React from "react";
import s from "./users.module.css";
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
            axios.get<ResponseType>("https://social-network.samuraijs.com/api/1.0/users")
                .then(res => this.props.setUsers(res.data.items))
        }
    }

    render() {

        return <div>
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