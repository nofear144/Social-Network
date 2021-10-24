import {ActionType, messagesPageType} from "./state";

let initialState = {
    messages: [
        {id: 1, text: 'Hello man'},
        {id: 2, text: 'Do u want go for a walk today?'},
        {id: 3, text: 'Wat are u doing?'},
    ],
    newMessageBody: "",
}
export const dialogReducer = (state: messagesPageType = initialState, action: ActionType) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body;
            return state;

        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 4, text: body})
            return state
        default:
            return state
    }
}


export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE",
    } as const
}
export const updateNewMessageBody = (body: any) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body
    } as const
}