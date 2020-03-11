import React from 'react';
import style from './Forms.module.css';
import { Field } from 'redux-form';



const FormControl = ({input, meta, child, ...props}) => {
    const hasError =  meta.touched && meta.error;
    return (
        <div className = {style.form__control + " " + (hasError? style.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const CreateField = (placeholder, name, validator, component, props = {}, text = '') => {
    return <div>
        <Field olaceholder = {placeholder} 
        name = {name} 
        validator = {validator}
        component = {component} 
        {...props} /> {text}
    </div>
}



export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props} >
        <textarea {...input} {...restProps} />
    </FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>
        <input {...input} {...restProps} />
    </FormControl>
}