import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {reducersType} from "./redux/redux-store";
import {useSelector} from "react-redux";




function App() {
    let profile = useSelector((state: reducersType) => state.profile)
    let messagesPage = useSelector((state: reducersType) => state.messagesPage)
    let newPostText = useSelector((state: reducersType) => state.profile.newPostText)
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <Dialogs
                    UsersArray={profile.dialogs}
                    MessagePage={messagesPage}

                />}/>
                <Route path='/profile' render={() => <Profile

                    posts={profile.posts}
                    newPostText={newPostText}

                />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>

        </div>
    )
}


export default App;
