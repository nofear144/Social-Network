import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";


const Header = (props:PropsType) => {
    return (
        <header className={s.header}>
            <img
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e4ab4c68b80a762c8cb43f222748c3c4_screen.jpg?ts=1561508783"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={"/login"}>Login</NavLink>
                }

            </div>

        </header>
    )
}
export default Header;

//types
type PropsType = {
    isAuth: boolean
    login: string
}