import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {User} from "./user";
import {Message} from "./Messages";
import {MapStatePropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";




export const Dialogs = (props: MapStatePropsType) => {

    let newMessageBody = props.newMessage

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
        console.log(body)
    }
    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let mappedMessage = props.messages.map((m) => <Message text={m.text} id={m.id}/>)
    let mappedUser = props.userArray.map((u) => <User name={u.name} id={u.id}/>)

    if (!props.isAuth){
        return <Redirect to={"/login"}/>
    }
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {mappedUser}
            </div>
            <div className={s.messages}>
                <div>{mappedMessage}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            placeholder={"Enter your message"}
                            onChange={onNewMessageChange}
                        >
                         </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}