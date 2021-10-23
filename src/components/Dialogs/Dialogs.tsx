import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {User} from "./user";
import {Message} from "./Messages";
import state, {DialogsType, MessagesType, sendMessageAC, updateNewMessageBody} from "../../redux/state";


export type DialogsPropsType = {
    UsersArray: DialogsType
    MessageArray: MessagesType
}

export const Dialogs = (props: DialogsPropsType) => {

    let newMessageBody = state._state.messagesPage.newMessageBody

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        state.dispatch(updateNewMessageBody(body))
    }
    let onSendMessageClick = () => {
        state.dispatch(sendMessageAC())
    }
    let mappedMessage = props.MessageArray.map((m) => <Message text={m.text} id={m.id}/>)
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