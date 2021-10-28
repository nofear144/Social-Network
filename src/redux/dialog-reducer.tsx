import {messagesPageType} from "./state";

let initialState:messagesPageType = {
    messages: [
        {id: 1, text: 'Hello man'},
        {id: 2, text: 'Do u want go for a walk today?'},
        {id: 3, text: 'Wat are u doing?'},
    ],
    newMessageBody: "",
}
export const dialogReducer = (state: messagesPageType = initialState, action:combineTypeAC):messagesPageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":

            return {...state, newMessageBody: action.body};

        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = "";
            return {...state, messages: [...state.messages, {id: 4, text: body}]}

        default:
            return state
    }
}


export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE",
    } as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body
    } as const
}
export type  combineTypeAC =
    |ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>