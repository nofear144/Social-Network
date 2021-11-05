import axios, {AxiosResponse} from "axios";
import {ResponseType} from "../components/Users/UsersContainer";
import {ResponseProfileType} from "../components/Profile/ProfileContainer";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "395bb44f-c5cd-48fe-9fde-631834ccd660"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<ResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data)

    },
    isLogged() {
        return instance.get(`/auth/me`)
            .then(res => res.data)
    },
    getProfile(userId: number) {
        console.warn("Obsolete method. Please use profileAPI object. ")
        return profileAPI.getProfile(userId)
    },

}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ResponseProfileType>(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
            .then(res => res.data)
    }

}

export const authAPI = {
    login(email:string,password:string,rememberMe:boolean,captcha?:string) {
        return instance.post<{email:string,password:string,rememberMe:boolean,captcha?:string}, AxiosResponse<ResponseLoginType>>('auth/login', {email,password,rememberMe,captcha})

    },
    logout() {
       return  instance.delete("auth/login")
    }
}


//Types
export type payloadType = {
    email: string,
    password: string,
    rememberMe: false
    captcha?: string
}
export type ResponseLoginType = {
    resultCode: number
    messages: string[]
    data: {
        userId:number
    }
}


