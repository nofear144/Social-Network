import axios from "axios";
import {ResponseType} from "../components/Users/UsersContainer";

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
    }
}
