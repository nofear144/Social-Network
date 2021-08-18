import React from "react";
import s from "./Dialogs.module.css";

export type MessagesType = {
    text:string
    id:number
}
export const Message =(props:MessagesType)=>{
    return  <div className={s.message}>
        {props.text}
    </div>
}