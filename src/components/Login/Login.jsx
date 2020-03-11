import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Input, CreateField } from '../common/Forms';

import './Login.css';

import {required} from '../../utils/validators/validators';
import { loginThunk, logoutThunk, getCaptchaThunk } from '../../redux/authReducer'




const LoginForm = (props) => {
    return (
        <div className="container">
            <div className ="row">
                <div className="col-md-offset-3 col-md-6">
                    <form className="form-horizontal" onSubmit = {props.handleSubmit}> 
                        <h2 className ="heading" >Login Page</h2>
                        <div className="form-group">
                            <Field className = "form-control" component= {Input} validate = {[required]} name="email" type="email" id="login" placeholder="Your email" />
                            <i className ="fa fa-user"></i>
                        </div>
                        <div className="form-group help">
                            <Field  className= "form-control"component= {Input} validate = {[required]}type="password" name="password" id="pass" placeholder="Password" />
                            <i className="fa fa-lock"></i>
                        </div>


                        <div className="form-group">
                            <div className="main-checkbox" id="checkbox">
                                <Field 
                                value= "none"
                                component= {Input} type="checkbox" name="rememberMe" id="rememberMe" 
                               />
                            </div>
                            <span className ="text">Remember Me</span>

            { props.captcha && <img src = {props.captcha} alt = "captcha"/>}

            { props.captcha && CreateField ('Symbols', 'captcha', [required], Input)}

            {props.error && <div>{props.error}</div>}

                <div>
                <button id = "loginBtn" className="btn  btn-default" type="submit">Login</button>
                </div>
                </div>
        </form>
        </div>
        </div>
        </div>
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
    return <div className = "form__container">
        <ReduxLoginForm onSubmit = {onSubmit} captcha = {props.captcha} />
    </div>
}

const mapStateToProps = (state) => (
    {
        captcha: state.authReducer.captcha,
        isAuth: state.authReducer.isAuth}
)

export default connect(mapStateToProps, {loginThunk, logoutThunk, getCaptchaThunk})(Login);
