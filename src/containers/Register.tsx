import React, { FC, useCallback } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

import { Error, FormLabel, LoginHeader, Submit } from '../components';
import { initialRegisterObject, PropTypes, RegisterObject, Validation } from '../model';
import { onRegister } from '../store/actions/auth';

const Register: FC<PropTypes.Register> = ({ onRegister }) => {
    const history = useHistory();

    const onSubmit = useCallback(
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
        <div className="container">
            <LoginHeader text="Sign Up" />
            <div className="center">
                <Formik
                    initialValues={initialRegisterObject}
                    validationSchema={Validation.registerSchema}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
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
                    )}
                </Formik>
            </div>
            <div className="col-12 d-block text-center mt-4">
                Already have an account?
                <Link className="text-primary" to="/login">
                    {' '}
                    Sign in
                </Link>
            </div>
        </div>
    );
};

const mapDispatchToProps = { onRegister };

export default connect(null, mapDispatchToProps)(Register);
