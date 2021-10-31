import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {LoginData, setUserData} from "../../redux/set-auth-reducer";



class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    constructor(props: HeaderContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.LoginData()
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
export default connect(mapStateToProps, {setUserData,LoginData})(HeaderContainer);

//Types

type HeaderContainerPropsType = {
    isAuth: boolean
    login: string
    setUserData: (id: number, email: string, login: string) => void
    LoginData:()=>void
}