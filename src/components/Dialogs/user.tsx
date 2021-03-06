import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css";

type UserPropsType = {
    name: string
    id: number
}

export const User = (props: UserPropsType) => {
    return (
        <NavLink to={"/dialogs/" + props.id} className={s.user}>
            {props.name}
        </NavLink>
    )
}