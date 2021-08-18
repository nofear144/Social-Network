import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css";

export type UserType = {
    name: string
    id: number
}

export const User = (props: UserType) => {
    return (
        <NavLink to={"/dialogs/" + props.id} className={s.user}>
            {props.name}
        </NavLink>
    )
}