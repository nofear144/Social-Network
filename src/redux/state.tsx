import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";

/*export let renderTree = () => {

}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    text: string
}
export type PostType = {
    id: number
    message: string
    value: number
}
export type PostsType = PostType[]
export type DialogsType = Array<DialogType>;
export type MessagesType = Array<MessageType>;
export type profileType = {
    posts: PostsType
    newPostText: string
    dialogs: DialogsType
}
export type messagesPageType = {
    messages: MessagesType
    newMessageBody: string
}
export type  stateType = {
    profile: profileType
    messagesPage: messagesPageType;
    sidebar:{},
}
export  type StoreType = {
    _state: stateType,

    ChangeNewText: (newText: string) => void,
    addPost: (newText: string) => void,
    _callSubscriber: () => void;
    subscribe: (observer: () => void) => void,
    getState: () => stateType,
    dispatch: (action: ActionType) => void
}
export type ActionType = AddPostActionType
    | ChangeNewTextActionType
    | sendMessageActionType
    | updateNewMessageBody
export type AddPostActionType = ReturnType<typeof addPostAC>
export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>
export type sendMessageActionType = ReturnType<typeof sendMessageAC>
export type updateNewMessageBody = ReturnType<typeof updateNewMessageBody>*/


/*export let store: StoreType = {
    _state: {
        profile: {
            posts: [
                {id: 1, message: "Hello man ,How are u?", value: 10},
                {id: 2, message: "It's my first post", value: 15},
                {id: 3, message: "It's my first post", value: 112},
                {id: 4, message: "It's my first post", value: 14},
            ],
            newPostText: "",

            dialogs: [
                {id: 1, name: "Dmitriy.K"},
                {id: 2, name: "Ekaterina.G"},
                {id: 3, name: "Iliya.Y"},
                {id: 4, name: "Zakhar.Y"},
                {id: 5, name: "Pavel.M"},
            ],
        },
        messagesPage: {
            messages: [
                {id: 1, text: 'Hello man'},
                {id: 2, text: 'Do u want go for a walk today?'},
                {id: 3, text: 'Wat are u doing?'},
            ],
            newMessageBody: "",
        },
        sidebar: {},

    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("state changed")
    },
    addPost(newText: string) {
        let newPost: PostType = {id: 5, message: this._state.profile.newPostText, value: 0}
        this._state.profile.posts.push(newPost)
        this.ChangeNewText("")
        this._callSubscriber();
    },
    ChangeNewText(newText: string) {
        this._state.profile.newPostText = newText
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action)
        this._state.messagesPage = dialogReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
    },
}*/


/*
export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText
    } as const
}
export const addPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postText
    } as const
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
*/


