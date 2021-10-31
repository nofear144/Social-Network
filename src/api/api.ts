import axios from "axios";
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
        return instance.get<ResponseProfileType>(`profile/${userId}`)
            .then(res => res.data)
    }

}
