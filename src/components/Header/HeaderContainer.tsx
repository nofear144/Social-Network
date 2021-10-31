import React from "react";
import Header from "./Header";
import axios from "axios";

import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {setUserData} from "../../redux/set-auth-reducer";


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    constructor(props: HeaderContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
            withCredentials: true
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, login, email} = res.data.data
                    this.props.setUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
        />
    }
}

const mapStateToProps = (state: rootReducerType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

});
export default connect(mapStateToProps, {setUserData})(HeaderContainer);

//Types

type HeaderContainerPropsType = {
    isAuth: boolean
    login: string
    setUserData: (id: number, email: string, login: string) => void
}