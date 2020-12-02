/**
 * @file Contains definitions for the Login Component
 */

import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';

import { LoginObject, PropTypes, Validation, initialLoginObject } from '../../model';
import LoginForm from './LoginForm';

/**
 * The login component
 *
 * @param props - Properties passed down from parents to children
 * @param props.onLogin - The function to log in the user
 * @returns The login component
 */
const Login: FC<PropTypes.Login> = ({ onLogin }) => {
    const history = useHistory();

    const onSubmitAsync = useCallback(
        async (values: LoginObject) => {
            try {
                await onLogin(values);
                history.push('/');
            } catch (err) {
                console.error(err);
            }
        },
        [onLogin, history]
    );

    return (
        <Formik initialValues={initialLoginObject} validationSchema={Validation.loginSchema} onSubmit={onSubmitAsync}>
            {({ errors, touched }) => <LoginForm errors={errors} touched={touched} />}
        </Formik>
    );
};

export default Login;
