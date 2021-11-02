import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

let initialState: initialStateType = {

    id: 1,
    email: "",
    login: "",
    isAuth: false,

}


export const setAuthReducer = (state: initialStateType = initialState, action: combineAcTypes): initialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }

}


//THUNKS
export const LoginData = () => (dispatch:Dispatch) => {
    usersAPI.isLogged()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setUserData(id, email, login))
            }
        })
}


//Action Creators
export const setUserData = (userId: number, email: string, login: string) => {
    return {
        type: "SET-USER-DATA",
        data: {
            userId,
            email,
            login
        }
    } as const
}
//Types


export type initialStateType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean,


}

export type combineAcTypes = ReturnType<typeof setUserData>
