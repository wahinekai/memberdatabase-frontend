/**
 * @file Contains definitions for the Profile component
 */
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Formik } from 'formik';
import { plainToClass } from 'class-transformer';

import { HttpMethodTypes, User, IUser, Validation } from '../model';
import { apiCallAsync, authProvider, Ensure, settings, Timer } from '../utils';
import ProfileForm from './ProfileForm';
import Error from './Error';
import { TextCenter } from './Style';

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
        submitting: boolean;
    };

    const [state, setState] = useState<StateType>({ submitting: false });
    const [submitted, setSubmittedState] = useState(false);

    const { error, submitting, user: userMaybeNull } = state;
    const setUser = useCallback(
        (user: IUser) => setState((state) => ({ ...state, user: plainToClass(User, user) })),
        []
    );
    const setError = useCallback((error: string) => setState((state) => ({ ...state, error })), []);
    const setSubmitting = useCallback((submitting: boolean) => setState((state) => ({ ...state, submitting })), []);
    const setSubmitted = useCallback(async () => {
        setSubmittedState(true);
        await Timer.waitSecondsAsync(2);
        setSubmittedState(false);
    }, [setSubmittedState]);

    // Create onSubmit callback to update user
    const onSubmitAsync = useCallback(
        async (updatedUserObject: IUser) => {
            try {
                setSubmitting(true);
                const updatedUser = plainToClass(User, updatedUserObject);
                updatedUser.validate();
                const userFromBackend = await updateMeAsync(updatedUser);

                // Update access tokens if email changes
                if (userFromBackend.email !== userMaybeNull?.email) {
                    // Wait for AAD to propogate changes
                    await Timer.waitSecondsAsync(15);

                    // Force access token to refresh
                    await authProvider.getAccessToken({
                        forceRefresh: true,
                        scopes: settings.auth.accessTokenScopes,
                    });
                }

                setState((state) => ({
                    ...state,
                    user: plainToClass(User, userFromBackend),
                    submitting: false,
                }));
                setSubmitted();
            } catch (err) {
                setState((state) => ({
                    ...state,
                    error: 'Error in submission or validation of form',
                    submitting: false,
                }));
            }
        },
        [setSubmitting, userMaybeNull, setSubmitted]
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

    const submitMessage = submitted ? afterSubmitMessage : submitting ? submittingMessage : initialSubmitMessage;

    try {
        const user = Ensure.isNotNull(() => userMaybeNull);
        user.validate();

        const lastEdited = new Date(0);

        if (user.timeStamp) {
            lastEdited.setUTCSeconds(user.timeStamp);
        }

        const lastEditedComponent = user.timeStamp ? (
            <TextCenter>
                <h5>Last Edited: {lastEdited.toLocaleString()}</h5>
            </TextCenter>
        ) : null;

        const userForFormik = user.readyForFormik();

        return (
            <>
                {lastEditedComponent}
                {errorComponent}
                <Formik
                    initialValues={userForFormik}
                    validationSchema={Validation.updateProfileSchema}
                    onSubmit={onSubmitAsync}
                >
                    <ProfileForm submitMessage={submitMessage} disabled={submitting} />
                </Formik>
            </>
        );
    } catch (err) {
        return null;
    }
};

export default Profile;
