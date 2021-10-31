let initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 3,
    isFetching: false,
    isDisabled: false,
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
            return {...state, totalUsersCount: action.count}
        case "SET-PRELOADER-STATUS":
            return {...state, isFetching: action.status}
        case "IS-DISABLED-BUTTON":
            console.log(action.status)
            return {...state,isDisabled:action.status}
        default:
            return state
    }

}
//Action Creators
export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        userId,
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId,
    } as const
}
export const setUsers = (users: userType[]) => {
    return {
        type: "SET-USERS",
        users
    } as const
}
export const setCurrentPage = (page: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        page
    } as const
}
export const setCurrentPageTotalCount = (count: number) => {
    return {
        type: "SET-CURRENT-PAGE-TOTAL-COUNT",
        count
    } as const
}
export const setPreloaderStatus = (status: boolean) => {
    return {
        type: "SET-PRELOADER-STATUS",
        status

    } as const
}
export const isButtonDisabled = (status: boolean) => {
    return {
        type: "IS-DISABLED-BUTTON",
        status

    } as const
}


//Types

export type userType = {
    name: string
    id: number
    photos: photosType
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
    isFetching: boolean
    isDisabled: boolean
}
export type followAcType = ReturnType<typeof follow>
export type unfollowAcType = ReturnType<typeof unfollow>
export type setUsersAcType = ReturnType<typeof setUsers>
export type setCurrentPageAcType = ReturnType<typeof setCurrentPage>
export type setCurrentPageTotalCountAcType = ReturnType<typeof setCurrentPageTotalCount>
export type PreloaderAcType = ReturnType<typeof setPreloaderStatus>
export type isButtonDisabledAcType = ReturnType<typeof isButtonDisabled>
export type combineAcTypes =
    | followAcType
    | unfollowAcType
    | setUsersAcType
    | setCurrentPageAcType
    | setCurrentPageTotalCountAcType
    | PreloaderAcType
    | isButtonDisabledAcType