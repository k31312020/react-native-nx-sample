import React from 'react';
import * as Yup from 'yup';

export const signInValidation = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Email required'),
    password: Yup.string().min(4).required('Required')
})

export const signUpValidation = Yup.object().shape({
    username: Yup.string().required('Username Required'),
    email: Yup.string().email('Invalid Email').required('Email required'),
    password: Yup.string().min(4).required('Required')
})