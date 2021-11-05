import React from "react";
import TextField from '@mui/material/TextField';
import s from './login.module.css'
import Checkbox from '@mui/material/Checkbox';
import {Button} from "@mui/material";
import {useFormik} from "formik";
import {connect, useDispatch} from "react-redux";
import {loginDataFromFormik} from "../../redux/set-auth-reducer";


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
/*type loginDataFromFormikType = {
    loginDataFromFormik?:(email:string,password:string,rememberMe:boolean)=>void
}*/
export const LoginForm = () => {
    const dispatch=useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: "",
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = "Required"
            } else if (values.password.length < 3) {
                errors.password = "Incorrect password"
            }
            return errors;
        },
        onSubmit: values => {

               dispatch(loginDataFromFormik(values.email, values.password, values.rememberMe))


        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={s.login}>
                <div>
                    <TextField
                        label="Email"
                        margin="normal"
                        {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email ?
                        <div style={{color: "red"}}>{formik.errors.email}</div> : null}
                </div>
                <div>
                    <TextField
                        type="password"
                        label="Password"
                        margin="normal"
                        {...formik.getFieldProps("password")}
                    />
                    {formik.touched.password && formik.errors.password ?
                        <div style={{color: "red"}}>{formik.errors.password}</div> : null}
                </div>
                <div>
                    <Checkbox
                        defaultChecked size="small"
                        checked={formik.values.rememberMe}
                        {...formik.getFieldProps("rememberMe")}
                    />
                    <span>Remember me</span>
                </div>
                <div>
                    <Button
                        variant="outlined"
                        size="small"
                        type={'submit'}
                    >
                        Login
                    </Button>
                </div>

            </div>
        </form>
    )
}

//export default connect(null, {login})(LoginForm)