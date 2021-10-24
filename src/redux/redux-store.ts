import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    messagesPage: dialogReducer,
    sidebar: sidebarReducer
});


export let store = createStore(reducers);

export type reducersType = ReturnType<typeof reducers>

