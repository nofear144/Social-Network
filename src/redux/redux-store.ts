import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {setAuthReducer} from "./set-auth-reducer";

let rootReducer = combineReducers({
    profile: profileReducer,
    messagesPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage:usersReducer,
    auth:setAuthReducer,
});


export let store = createStore(rootReducer);

export type rootReducerType = ReturnType<typeof rootReducer>

