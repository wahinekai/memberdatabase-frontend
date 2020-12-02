/**
 * @file Registration form component
 */

import React, { FC } from 'react';
import { Field, Form } from 'formik';

import { Error, FormLabel, Submit } from '..';
import { PropTypes, RegisterObject } from '../../model';

/**
 * The display of the registration form
 *
 * @param props React props passed down from parent component
 * @param props.errors Formik Errors
 * @param props.touched Formik Touched field
 * @returns The formik form for registration
 */
const RegisterForm: FC<PropTypes.Form<RegisterObject>> = ({ errors, touched }) => (
    <Form>
        <div className="row">
            <div className="col-12 text-center mb-4">
                {errors.email && touched.email ? <Error>{errors.email}</Error> : null}
                <FormLabel htmlFor="email"></FormLabel>
                <Field name="email" type="email" placeholder="email" />
            </div>
        </div>

        <div className="row">
            <div className="col-12 text-center mb-4">
                {errors.phone && touched.phone ? <Error>{errors.phone}</Error> : null}
                <FormLabel htmlFor="phone"></FormLabel>
                <Field name="phone" placeholder="phone" />
            </div>
        </div>

        <div className="row">
            <div className="col-12 text-center mb-4">
                {errors.username && touched.username ? <Error>{errors.username}</Error> : null}
                <FormLabel htmlFor="username"></FormLabel>
                <Field name="username" placeholder="username" />
            </div>
        </div>

        <div className="row">
            <div className="col-12 text-center mb-4">
                {errors.password && touched.password ? <Error>{errors.password}</Error> : null}
                <FormLabel htmlFor="password"></FormLabel>
                <Field name="password" type="password" placeholder="password" />
            </div>
        </div>

        <div className="row">
            <div className="col-12 text-center">
                <Submit>Sign up</Submit>
            </div>
        </div>
    </Form>
);

export default RegisterForm;
