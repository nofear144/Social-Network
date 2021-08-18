import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css"
import {User, UserType} from "./user";
import {Message} from "./Messages";


export const Dialogs = () => {
    const MessageArray=[
        {id:1,text:'Hello man'},
        {id:2,text:'Do u want go for a walk today?'},
        {id:3,text:'Wat are u doing?'}
    ]
    let mappedMessage=MessageArray.map((m)=><Message text={m.text} id={m.id}/>)
    const UserArray = [
        {id: 1, name: "Dmitriy.K"},
        {id: 2, name: "Ekaterina.G"},
        {id: 3, name: "Iliya.Y"},
        {id: 4, name: "Zakhar.Y"},
        {id: 5, name: "Pavel.M"}
    ]
    let mappedUser=UserArray.map((u)=><User name={u.name} id={u.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {mappedUser}
            </div>
            <div className={s.messages}>
                {mappedMessage}
            </div>
        </div>
    )
}