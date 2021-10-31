import {PostType, profilePageType} from "./state";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";


let initialState = {
    posts: [
        {id: 1, message: "Hello man ,How are u?", value: 10},
        {id: 2, message: "It's my first post", value: 15},
        {id: 3, message: "It's my first post", value: 112},
        {id: 4, message: "It's my first post", value: 14},
    ],
    newPostText: "",
    profile: {
        userId: 2,
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
export type combineAcTypesForProfile =
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>