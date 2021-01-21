/**
 * @file Contains definitions for the Create User component
 */
import React, { FC, useCallback, useState } from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { plainToClass } from 'class-transformer';

import { HttpMethodTypes, User, IUser, Validation } from '../model';
import { apiCallAsync, Ensure, Timer } from '../utils';
import ProfileForm from './ProfileForm';
import Error from './Error';
import TextCenter from './TextCenter';

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
        submitting: boolean;
    };

    const history = useHistory();

    const [state, setState] = useState<StateType>({ submitting: false });
    const [submitted, setSubmittedState] = useState(false);

    const { error, submitting } = state;
    const setSubmitting = useCallback((submitting: boolean) => setState((state) => ({ ...state, submitting })), []);
    const setSubmitted = useCallback(async () => {
        setSubmittedState(true);
        await Timer.waitSecondsAsync(2);
        setSubmittedState(false);
    }, [setSubmittedState]);

    // Create onSubmit callback to update user
    const onSubmitAsync = useCallback(
        async (userObject: IUser) => {
            try {
                setSubmitting(true);
                const createdUser = plainToClass(User, userObject);
                createdUser.validate();
                delete createdUser.id;

                const { id: idMaybeNull } = await createAsync(createdUser);
                const id = Ensure.isNotNull(() => idMaybeNull);

                setState((state) => ({
                    ...state,
                    submitting: false,
                }));
                setSubmitted();

                // Wait for 2 seconds, then go to edit user page
                await Timer.waitSecondsAsync(2);
                history.push(`/users/${id.toString()}`);
            } catch (err) {
                setState((state) => ({
                    ...state,
                    error: 'Error in submission of validation of form',
                    submitting: false,
                }));
            }
        },
        [history, setSubmitting, setSubmitted]
    );

    const errorComponent =
        error && error !== '' ? (
            <TextCenter>
                <Error className="h3">{error.toString()}</Error>
            </TextCenter>
        ) : null;

    const initialSubmitMessage = 'Create Member';
    const submittingMessage = 'Creating...';
    const afterSubmitMessage = 'Member created successfully!  Taking you to the edit member page.';
    const submitMessage = submitted ? afterSubmitMessage : submitting ? submittingMessage : initialSubmitMessage;

    return (
        <>
            {errorComponent}
            <Formik
                initialValues={User.createForFormik()}
                validationSchema={Validation.updateProfileSchema}
                onSubmit={onSubmitAsync}
            >
                <ProfileForm submitMessage={submitMessage} disabled={submitting} />
            </Formik>
        </>
    );
};

export default CreateUser;
