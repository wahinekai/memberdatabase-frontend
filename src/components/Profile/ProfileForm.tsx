/**
 * @file Definition for the edit profile form
 */

import { Field, Form } from 'formik';
import React, { FC } from 'react';
import { PropTypes, User } from '../../model';
import Error from '../Error';
import FormLabel from '../FormLabel';
import Submit from '../Submit';

/**
 * The Profile Form Component
 *
 * @param props - Properties passed down from parents
 * @param props.errors - Formik error information
 * @param props.touched - Formik touched information
 * @returns The Profile Form Component
 */
const ProfileForm: FC<PropTypes.Form<User>> = ({ errors, touched }) => (
    <Form>
        <div className="row">
            <div className="col-12 text-center mb-4">
                {errors.email && touched.email ? <Error>{errors.email}</Error> : null}
                <FormLabel htmlFor="email" />
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
            <div className="col-12 text-center">
                <Submit>Update Profile</Submit>
            </div>
        </div>
    </Form>
);

export default ProfileForm;
