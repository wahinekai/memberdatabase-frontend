/**
 * @file Contains definitions for the Login Form
 */

import React, { FC } from 'react';
import { Field, Form } from 'formik';
import Error from '../Error';
import Submit from '../Submit';
import { LoginObject, PropTypes } from '../../model';

/**
 * The Login Form Component
 *
 * @param props - Properties passed down from parents
 * @param props.errors - Formik error information
 * @param props.touched - Formik touched information
 * @returns The Login Form Component
 */
const LoginForm: FC<PropTypes.Form<LoginObject>> = ({ errors, touched }) => (
    <Form>
        <div className="row">
            <div className="col-12 text-center mb-4">
                {errors.username && touched.username ? <Error>{errors.username}</Error> : null}
                <Field name="username" placeholder="username" />
            </div>
        </div>

        <div className="row">
            <div className="col-12 text-center mb-4">
                {errors.password && touched.password ? <Error>{errors.password}</Error> : null}
                <Field name="password" type="password" placeholder="password" />
            </div>
        </div>

        <div className="row">
            <div className="col-12 text-center">
                <Submit>Log in</Submit>
            </div>
        </div>
    </Form>
);

export default LoginForm;
