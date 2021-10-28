let initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
}


export const usersReducer = (state: initialStateType = initialState, action: combineAcTypes): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}

        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.page}
        case "SET-CURRENT-PAGE-TOTAL-COUNT":
            return {...state,totalUsersCount:action.count}
        default:
            return state
    }

}
//Action Creators
export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId,
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId,
    } as const
}
export const setUsersAC = (users: userType[]) => {
    return {
        type: "SET-USERS",
        users
    } as const
}
export const setCurrentPageAC = (page: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        page
    } as const
}
export const setCurrentPageTotalCountAC = (count: number) => {
    return {
        type: "SET-CURRENT-PAGE-TOTAL-COUNT",
        count
    } as const
}


//Types
export type ResponseType = {
    items: userType[]
    totalCount: number,
    error: string,
}
export type userType = {
    name: string
    id: number
    photo: photosType
    status: string
    followed: boolean
}
export type photosType = {
    small: string,
    large: string,
}
export type initialStateType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type combineAcTypes =
    | followAcType
    | unfollowAcType
    | setUsersAcType
    | setCurrentPageACType
    | setCurrentPageTotalCountACType
export type followAcType = ReturnType<typeof followAC>
export type unfollowAcType = ReturnType<typeof unfollowAC>
export type setUsersAcType = ReturnType<typeof setUsersAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setCurrentPageTotalCountACType = ReturnType<typeof setCurrentPageTotalCountAC>