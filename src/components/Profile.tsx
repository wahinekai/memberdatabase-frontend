/**
 * @file Contains definitions for the Profile component
 */
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Formik } from 'formik';
import { plainToClass } from 'class-transformer';

import { HttpMethodTypes, User, IUser, Validation } from '../model';
import { apiCallAsync, Ensure } from '../utils';
import ProfileForm from './ProfileForm';
import Error from './Error';
import TextCenter from './TextCenter';

/**
 * Gets the profile of the authenticated user
 *
 * @returns The authenticated user's profile
 */
const getMeAsync = (): Promise<IUser> => apiCallAsync<IUser>(HttpMethodTypes.GET, '/Users/Me');

/**
 * Update the user in the database and return the updated user.
 *
 * @param updatedUserObject The updated to user to add to the database
 * @returns The updated user from the database
 */
const updateMeAsync = (updatedUserObject: IUser): Promise<IUser> =>
    apiCallAsync<IUser>(HttpMethodTypes.PUT, '/Users/Me', updatedUserObject);

/**
 * The Edit Profile Component
 *
 * @returns The Edit Profile Component
 */
const Profile: FC = () => {
    // Create state of user
    type StateType = {
        user?: User;
        error?: string;
        submitCount: number;
        submitting: boolean;
    };

    const [state, setState] = useState<StateType>({ submitCount: 0, submitting: false });

    const { error, submitCount, submitting, user: userMaybeNull } = state;
    // eslint-disable-next-line jsdoc/require-jsdoc
    const setUser = useCallback(
        (user: IUser) => setState((state) => ({ ...state, user: plainToClass(User, user) })),
        []
    );
    // eslint-disable-next-line jsdoc/require-jsdoc
    const setError = useCallback((error: string) => setState((state) => ({ ...state, error })), []);
    // eslint-disable-next-line jsdoc/require-jsdoc
    const setSubmitting = useCallback((submitting: boolean) => setState((state) => ({ ...state, submitting })), []);

    // Create onSubmit callback to update user
    const onSubmitAsync = useCallback(
        async (updatedUserObject: IUser) => {
            try {
                setSubmitting(true);
                const updatedUser = plainToClass(User, updatedUserObject);
                updatedUser.validate();
                const userFromBackend = await updateMeAsync(updatedUser);
                setState((state) => ({
                    ...state,
                    user: plainToClass(User, userFromBackend),
                    submitting: false,
                    submitCount: submitCount + 1,
                }));
            } catch (err) {
                setState((state) => ({
                    ...state,
                    error: 'Error in submission or validation of form',
                    submitting: false,
                }));
            }
        },
        [setSubmitting, submitCount]
    );

    // Update state with newest user on first render
    useEffect(() => {
        try {
            getMeAsync().then((user) => setUser(user));
        } catch (err) {
            setError('Error in getting user');
        }
    }, [setUser, setError]);

    const errorComponent =
        error && error !== '' ? (
            <TextCenter>
                <Error className="h3">{error.toString()}</Error>
            </TextCenter>
        ) : null;

    const initialSubmitMessage = 'Update Member';
    const submittingMessage = 'Updating...';
    const afterSubmitMessage = 'Member updated successfully!';

    try {
        const user = Ensure.isNotNull(() => userMaybeNull);
        user.validate();

        const userForFormik = user.readyForFormik();

        return (
            <>
                {errorComponent}
                <Formik
                    initialValues={userForFormik}
                    validationSchema={Validation.updateProfileSchema}
                    onSubmit={onSubmitAsync}
                >
                    <ProfileForm
                        submitCount={submitCount}
                        submitting={submitting}
                        initialSubmitMessage={initialSubmitMessage}
                        submittingMessage={submittingMessage}
                        afterSubmitMessage={afterSubmitMessage}
                    />
                </Formik>
            </>
        );
    } catch (err) {
        return null;
    }
};

export default Profile;
