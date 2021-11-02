import {DialogType} from "./state";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {ResponseProfileType} from "../components/Profile/ProfileContainer";


let initialState = {
    posts: [
        {id: 1, message: "Hello man ,How are u?", value: 10},
        {id: 2, message: "It's my first post", value: 15},
        {id: 3, message: "It's my first post", value: 112},
        {id: 4, message: "It's my first post", value: 14},
    ],
    newPostText: "",
    profile: {
        userId: 19599,
        lookingForAJob: true,
        lookingForAJobDescription: "",
        fullName: "",
        contacts: {
            github: "",
            vk: "",
            facebook: "",
            instagram: "",
            twitter: "",
            website: "",
            youtube: "",
            mainLink: "",
        },

        photos: {
            small: "",
            large: ""
        },
    },
    dialogs: [
        {id: 1, name: "Dmitriy.K"},
        {id: 2, name: "Ekaterina.G"},
        {id: 3, name: "Iliya.Y"},
        {id: 4, name: "Zakhar.Y"},
        {id: 5, name: "Pavel.M"},
    ],
    status: "",
}

export const profileReducer = (state: profilePageType = initialState, action: combineAcTypesForProfile): profilePageType => {
    switch (action.type) {

        case "ADD-POST":

            let newPost: PostType = {id: 5, message: action.postText, value: 0}
            state.newPostText = ""
            return {...state, posts: [...state.posts, newPost]};

        case "CHANGE-NEW-TEXT":
            return {...state, newPostText: action.newText}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {...state,status:action.status}
        default:
            return state
    }

}


//THUNKS
export const getProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}
export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if(data.resultCode===0){
                dispatch(setStatus(status))
            }
        })
}

//AC
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
export const setUserProfile = (profile: any) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: "SET-STATUS",
        status
    }as const
}


//Types
export type ResponseProfileStatusType={
    resultCode:number
    messages:string[]
    data:{}
}
export type PostType = {
    id: number
    message: string
    value: number
}
export type PostsType = PostType[]
export type DialogsType = Array<DialogType>;
export type profilePageType = {
    posts: PostsType
    newPostText: string
    dialogs: DialogsType
    profile: ResponseProfileType
    status: string
}

export type combineAcTypesForProfile =
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
