/**
 * @file Register component
 */

import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';

import { PropTypes, RegisterObject, Validation, initialRegisterObject } from '../../model';
import RegisterForm from './RegisterForm';

/**
 * Logic handling user registration.
 *
 * @param props - Props given to the container from the parent component or mapDispatchToProps
 * @param props.onRegister - The onRegister redux action given by mapDispatchToProps
 * @returns The registration component
 */
const Register: FC<PropTypes.Register> = ({ onRegister }) => {
    const history = useHistory();

    const onSubmitAsync = useCallback(
        async (values: RegisterObject) => {
            try {
                await onRegister(values);
                history.push('/');
            } catch (err) {
                console.error(err);
            }
        },
        [onRegister, history]
    );

    return (
        <Formik
            initialValues={initialRegisterObject}
            validationSchema={Validation.registerSchema}
            onSubmit={onSubmitAsync}
        >
            {({ errors, touched }) => <RegisterForm errors={errors} touched={touched} />}
        </Formik>
    );
};

export default Register;
