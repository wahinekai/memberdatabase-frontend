/**
 * @file Contains definitions for the Edit User component
 */
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Guid } from 'guid-typescript';
import { plainToClass } from 'class-transformer';

import { HttpMethodTypes, User, IUser, Validation, PropTypes } from '../model';
import { apiCallAsync, Ensure, Timer } from '../utils';
import ProfileForm from './ProfileForm';
import Error from './Error';
import TextCenter from './Style/TextCenter';
import DeleteUserModal from './DeleteUserModal';

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
        submitting: boolean;
    };

    const [state, setState] = useState<StateType>({ submitting: false });
    const [submitted, setSubmittedState] = useState(false);

    const { error, submitting, user: userMaybeNull } = state;
    // eslint-disable-next-line jsdoc/require-jsdoc
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

                const userFromBackend = await updateByIdAsync(id, updatedUser);
                setState((state) => ({
                    ...state,
                    user: plainToClass(User, userFromBackend),
                    submitting: false,
                    error: undefined,
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
        [id, setSubmitting, setSubmitted]
    );

    // Update state with newest user on first render
    useEffect(() => {
        try {
            getByIdAsync(id).then((user) => setUser(user));
        } catch (err) {
            setError('Error in getting user');
        }
    }, [id, setUser, setError]);

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

        const userId = Ensure.isNotNull(() => user.id);

        const deleteUserComponent = <DeleteUserModal id={userId} />;

        return (
            <>
                {lastEditedComponent}
                {errorComponent}
                <Formik
                    initialValues={userForFormik}
                    validationSchema={Validation.updateProfileSchema}
                    onSubmit={onSubmitAsync}
                >
                    <ProfileForm
                        submitMessage={submitMessage}
                        disabled={submitting}
                        deleteUser
                        deleteUserComponent={deleteUserComponent}
                    />
                </Formik>
            </>
        );
    } catch (err) {
        return null;
    }
};

export default EditUser;
