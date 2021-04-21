import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../Common/FormsControls/FormsControls'
import { login } from "../../redux/auth-reducer";
import { Redirect } from 'react-router'
import styles from "../Common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} 
                    validate={[required]}
                    component={Input} 
                    name={"email"}
                />
            </div>
            <div>
                <Field placeholder={"Password"} component={Input} name={"password"} type={"password"}/>
            </div>
            <div>
                <Field type={"checkbox"} component={Input} name={"rememberMe"}/> remember me
            </div>
            {props.error && 
                <div className={styles.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    // unique name for form
    form: "login"
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    console.log(props)
    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm 
                onSubmit={onSubmit}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(
    mapStateToProps,
    {login}
)(Login);
