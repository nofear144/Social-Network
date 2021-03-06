import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialog-reducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {rootReducerType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import { MessagesType} from "../../redux/state";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {DialogsType} from "../../redux/profile-reducer";


export type MapStatePropsType = {
    isAuth:boolean
    messages: MessagesType
    newMessage: string
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
    userArray: DialogsType

}

let mapStateToProps = (state: rootReducerType) => {
    return {
        messages: state.messagesPage.messages,
        newMessage: state.messagesPage.newMessageBody,
        userArray:state.profile.dialogs,
        isAuth:state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)


