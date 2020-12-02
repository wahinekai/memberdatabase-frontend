import React, { FC, useCallback, useEffect } from 'react';
import { Field, Form, Formik } from 'formik';

import { PropTypes, User, Validation } from '../model';
import { isNotNull } from '../utils/ensure';
import { Error, FormLabel, LoginHeader, Logout, Submit } from '.';

/**
 * @param root0
 * @param root0.user
 * @param root0.onLogout
 * @param root0.getUser
 */
const Profile: FC<PropTypes.Profile> = ({ user, onLogout, getUser, updateUser }) => {
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
                <Logout onLogout={onLogout} />
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
