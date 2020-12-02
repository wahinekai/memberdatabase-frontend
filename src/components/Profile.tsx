/**
 * @file Contains definitions for the Profile component
 */
import React, { FC, useCallback, useEffect } from 'react';
import { Field, Form, Formik } from 'formik';

import { PropTypes, User, Validation } from '../model';
import { isNotNull } from '../utils/ensure';
import { Logout } from '../containers';
import { Error, FormLabel, LoginHeader, Submit } from '.';

/**
 * The Edit Profile Component
 *
 * @param props - Properties passed down from parents to children
 * @param props.user - The current user of the application
 * @param props.getUser - A function to refresh the current user from the backend
 * @param props.updateUser - A function to propogate user changes to the backend & redux store
 * @returns The Edit Profile Component
 */
const Profile: FC<PropTypes.Profile> = ({ user, getUser, updateUser }) => {
    // Create onSubmit callback to update user
    const onSubmitAsync = useCallback(
        async (values: User) => {
            try {
                await updateUser(values);
            } catch (err) {
                console.error(err);
            }
        },
        [updateUser]
    );

    // Update Redux store with newest user
    useEffect(() => {
        getUser();
    }, [getUser]);

    try {
        user = isNotNull(user);

        return (
            <div className="container">
                <Logout />
                <LoginHeader text="Profile" />
                <div className="center">
                    <Formik
                        initialValues={user}
                        validationSchema={Validation.updateProfileSchema}
                        onSubmit={onSubmitAsync}
                    >
                        {({ errors, touched }) => (
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
                        )}
                    </Formik>
                </div>
            </div>
        );
    } catch (err) {
        return null;
    }
};

export default Profile;
