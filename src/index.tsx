import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";




let rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store._state}
                dispatch={store.dispatch.bind(store)}
                newPostText={store._state.profile.newPostText}

            />
        </BrowserRouter>,
        document.getElementById('root')
    );

}
rerenderEntireTree();
store.subscribe(rerenderEntireTree);



