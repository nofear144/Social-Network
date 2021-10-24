import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {User} from "./user";
import {Message} from "./Messages";
import {DialogsType, messagesPageType,  sendMessageAC, updateNewMessageBody} from "../../redux/state";
import {useDispatch} from "react-redux";


export type DialogsPropsType = {
    UsersArray: DialogsType
    MessagePage: messagesPageType
}



export const Dialogs = (props: DialogsPropsType) => {
    let dispatch=useDispatch()
    let newMessageBody = props.MessagePage.newMessageBody

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        dispatch(updateNewMessageBody(body))
    }
    let onSendMessageClick = () => {
        dispatch(sendMessageAC())
    }
    let mappedMessage = props.MessagePage.messages.map((m) => <Message text={m.text} id={m.id}/>)
    let mappedUser = props.UsersArray.map((u) => <User name={u.name} id={u.id}/>)
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