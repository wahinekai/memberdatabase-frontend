/**
 * @file Contains definitions for the Edit User component
 */
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Guid } from 'guid-typescript';

import { HttpMethodTypes, User, IUser, Validation, PropTypes } from '../model';
import { apiCallAsync, Ensure } from '../utils';
import ProfileForm from './ProfileForm';
import { Error, TextCenter } from '.';

/**
 * Gets the profile of the user specified by the id parameter
 *
 * @param id - The id of the user to get from the database
 * @returns The authenticated user's profile
 */
const getByIdAsync = (id: Guid): Promise<IUser> =>
    apiCallAsync<IUser>(HttpMethodTypes.GET, `/Users/Id/${id.toString()}`);

/**
 * Update the user in the database and return the updated user.
 *
 * @param id - The id of the user to get from the database
 * @param updatedUserObject The updated to user to add to the database
 * @returns The updated user from the database
 */
const updateByIdAsync = (id: Guid, updatedUserObject: IUser): Promise<IUser> =>
    apiCallAsync<IUser>(HttpMethodTypes.PUT, `/Users/Id/${id.toString()}`, updatedUserObject);

/**
 * The Edit Profile Component
 *
 * @param props - Properties passed down from parents to children in React
 * @param props.id - The user id of the user to get
 * @returns The Edit Profile Component
 */
const EditUser: FC<PropTypes.EditUser> = ({ id }) => {
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
    const setUser = useCallback((user: IUser) => setState((state) => ({ ...state, user: new User(user) })), []);
    // eslint-disable-next-line jsdoc/require-jsdoc
    const setError = useCallback((error: string) => setState((state) => ({ ...state, error })), []);
    // eslint-disable-next-line jsdoc/require-jsdoc
    const setSubmitting = useCallback((submitting: boolean) => setState((state) => ({ ...state, submitting })), []);

    // Create onSubmit callback to update user
    const onSubmitAsync = useCallback(
        async (updatedUserObject: IUser) => {
            try {
                setSubmitting(true);
                const updatedUser = new User(updatedUserObject);
                updatedUser.validate();

                const userFromBackend = await updateByIdAsync(id, updatedUser);
                setState((state) => ({
                    ...state,
                    user: new User(userFromBackend),
                    submitting: false,
                    submitCount: submitCount + 1,
                }));
            } catch (err) {
                setError(err);
            }
        },
        [id, setSubmitting, submitCount, setError]
    );

    // Update state with newest user on first render
    useEffect(() => {
        try {
            getByIdAsync(id).then((user) => setUser(user));
        } catch (err) {
            setError(err);
        }
    }, [id, setUser, setError]);

    const errorComponent =
        error && error !== '' ? (
            <TextCenter>
                <Error className="h3">{error}</Error>
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

export default EditUser;
