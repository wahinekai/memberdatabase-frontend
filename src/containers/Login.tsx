import React, { FC, useCallback } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

import { Error, LoginHeader, Submit } from '../components';
import { initialLoginObject, LoginObject, PropTypes, Validation } from '../model';
import { onLogin } from '../store/actions/auth';

const Login: FC<PropTypes.Login> = ({ onLogin }) => {
    const onSubmit = useCallback(
        async (values: LoginObject) => {
            const history = useHistory();

            try {
                await onLogin(values);
                history.push('/');
            } catch (err) {
                console.error(err);
            }
        },
        [login, history]
    );

    return (
        <div className="container">
            <LoginHeader text="Sign In" />
            <div className="center">
                <Formik
                    initialValues={initialLoginObject}
                    validationSchema={Validation.loginSchema}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
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
                    )}
                </Formik>
            </div>
            <div className="col-12 d-block text-center mt-4">
                Don't have an account?
                <Link className="text-primary" to="/register">
                    {' '}
                    Sign up
                </Link>
            </div>
        </div>
    );
};

const mapDispatchToProps = { onLogin };

export default connect(null, mapDispatchToProps)(Login);
