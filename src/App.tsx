import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {UsersContainer} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/login/login";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";







function App() {

    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() =>  <DialogsContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer  />}/>
                <Route path='/users' render={() => <UsersContainer />}/>
                <Route path='/login' render={() =>  <Login/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    )
}


export default App;
