import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import { Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import store, {ActionType, stateType} from "./redux/state";




export type AppPropsType = {
    state:stateType
    dispatch:(action:ActionType)=>void
    newPostText:string
}

function App(props: AppPropsType) {
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs
                        UsersArray={props.state.profile.dialogs}
                        MessageArray={props.state.messagesPage.messages}
                    />}/>
                    <Route path='/profile' render={() => <Profile
                        dispatch={props.dispatch}
                        posts={props.state.profile.posts}
                        newPostText={props.newPostText}

                    />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>

            </div>
    )
}


export default App;
