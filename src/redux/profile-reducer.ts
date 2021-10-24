import {ActionType, PostType, profileType, stateType} from "./state";

let initialState={
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
}

export const profileReducer = (state: profileType=initialState, action: ActionType) => {
    switch (action.type) {

        case "ADD-POST":
            let newPost: PostType = {id: 5, message: action.postText, value: 0}
            state.posts.push(newPost)
            state.newPostText = "";
            return state;

        case "CHANGE-NEW-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state
    }

}

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