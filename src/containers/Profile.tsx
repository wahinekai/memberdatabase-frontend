import React, { FC, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import { Error, FormLabel, Logout, Submit, LoginHeader } from '../components';
import { User, PropTypes, Validation, ReduxState } from '../model';
import { updateUser, getUser } from '../store/actions/user';
import { logout } from '../store/actions/auth';
import { isNotNull } from '../utils/ensure';

const Profile: FC<PropTypes.Profile> = ({ user, onLogout, getUser }) => {
    // Create onSubmit callback to update user
    const onSubmit = useCallback(async (values: User) => {
        try {
            await updateUser(values);
        } catch (err) {
            console.error(err);
        }
    }, []);

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
                    <Formik initialValues={user} validationSchema={Validation.updateProfileSchema} onSubmit={onSubmit}>
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

const mapStateToProps = ({ user }: ReduxState) => ({
    user,
});

const mapDispatchToProps = { updateUser, getUser, onLogout: logout };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
