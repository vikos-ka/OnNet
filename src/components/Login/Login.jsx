import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Input, CreateField } from '../common/Forms';

import style from './Login.module.css'

import {required} from '../../utils/validators/validators';
import { loginThunk, logoutThunk, getCaptchaThunk } from '../../redux/authReducer'




const LoginForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}> 
            <h2>Login Page</h2>
            <div className={style.form__field + " " + style.input__right}>
                <Field component= {Input} validate = {[required]} name="email" id="login" placeholder="Your email" />
            </div>
            <div className={style.form__field + " " + style.input__right}>
                <Field  component= {Input} validate = {[required]}type="password" name="password" id="pass" placeholder="Password" />
            </div>
            <div id="checkbox" className={style.form__field}>
                <label >
                    <Field component= {Input} type="checkbox" name="rememberMe" id="rememberMe" />
                    Remember me on this computer
                </label>
            </div>

            { props.captcha && <img src = {props.captcha} alt = "captcha"/>}

            { props.captcha && CreateField ('Symbols', 'captcha', [required], Input)}

            {props.error && <div>{props.error}</div>}

            <button id = "loginBtn" className={style.form__field + " " + style.loginBtn} type="submit">Login</button>
        </form>
    )
}


const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) {
        return <Redirect to = {'/profile'} />
    }
    return <div className = {style.form__container}>
        <ReduxLoginForm onSubmit = {onSubmit} captcha = {props.captcha} />
    </div>
}

const mapStateToProps = (state) => (
    {
        captcha: state.authReducer.captcha,
        isAuth: state.authReducer.isAuth}
)

export default connect(mapStateToProps, {loginThunk, logoutThunk, getCaptchaThunk})(Login);
