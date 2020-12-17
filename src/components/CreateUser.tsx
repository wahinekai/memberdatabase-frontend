/**
 * @file Contains definitions for the Create User component
 */
import React, { FC, useCallback, useState } from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import { HttpMethodTypes, User, IUser, Validation } from '../model';
import { apiCallAsync, Ensure, Timer } from '../utils';
import ProfileForm from './ProfileForm';
import { Error } from '.';

/**
 * Create the user in the database and return the created user.
 *
 * @param userObject The created user to user to add to the database
 * @returns The created user from the database
 */
const createAsync = (userObject: IUser): Promise<IUser> =>
    apiCallAsync<IUser>(HttpMethodTypes.POST, '/Users/Create', userObject);

/**
 * The Create Profile Component
 *
 * @returns The Create Profile Component
 */
const CreateUser: FC = () => {
    // Create state of user
    type StateType = {
        error?: string;
        submitCount: number;
        submitting: boolean;
    };

    const history = useHistory();

    const [state, setState] = useState<StateType>({ submitCount: 0, submitting: false });

    const { error, submitCount, submitting } = state;
    // eslint-disable-next-line jsdoc/require-jsdoc
    const setError = useCallback((error: string) => setState((state) => ({ ...state, error })), []);
    // eslint-disable-next-line jsdoc/require-jsdoc
    const setSubmitting = useCallback((submitting: boolean) => setState((state) => ({ ...state, submitting })), []);

    // Create onSubmit callback to update user
    const onSubmitAsync = useCallback(
        async (userObject: IUser) => {
            try {
                setSubmitting(true);
                const createdUser = new User(userObject);
                createdUser.validate();
                delete createdUser.id;

                const { id: idMaybeNull } = await createAsync(createdUser);
                const id = Ensure.isNotNull(() => idMaybeNull);

                setState((state) => ({
                    ...state,
                    submitting: false,
                    submitCount: submitCount + 1,
                }));

                // Wait for 2 seconds, then go to edit user page
                await Timer.waitSecondsAsync(2);
                history.push(`/users/${id.toString()}`);
            } catch (err) {
                setError('Error in submission or validation of form');
            }
        },
        [history, setSubmitting, submitCount, setError]
    );

    const errorComponent = error && error !== '' ? <Error className="text-center h3">{error}</Error> : null;

    const initialSubmitMessage = 'Create Member';
    const submittingMessage = 'Creating...';
    const afterSubmitMessage = 'Member created successfully!  Taking you to the edit member page.';

    return (
        <>
            {errorComponent}
            <Formik
                initialValues={User.createForFormik()}
                validationSchema={Validation.updateProfileSchema}
                onSubmit={onSubmitAsync}
            >
                <ProfileForm
                    submitCount={submitCount}
                    submitting={submitting}
                    initialSubmitMessage={initialSubmitMessage}
                    submittingMessage={submittingMessage}
                    afterSubmitMessage={afterSubmitMessage}
                    create={true}
                />
            </Formik>
        </>
    );
};

export default CreateUser;
