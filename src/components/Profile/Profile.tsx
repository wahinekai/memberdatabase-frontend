/**
 * @file Contains definitions for the Profile component
 */
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Formik } from 'formik';

import { HttpMethodTypes, User, IUser, Validation } from '../../model';
import { apiCallAsync, Ensure } from '../../utils';
import { Error } from '..';
import ProfileForm from './ProfileForm';

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
    const [userMaybeNull, setUserState] = useState<User>();
    const [globalError, setGlobalError] = useState<string>('');
    const [submitCount, setSubmitCount] = useState(0);

    // Create setUser callbacek to set user state as an actual user
    const setUser = useCallback((userObject: IUser) => {
        setUserState(new User(userObject));
    }, []);

    // Create onSubmit callback to update user
    const onSubmitAsync = useCallback(
        async (updatedUserObject: IUser) => {
            try {
                const updatedUser = new User(updatedUserObject);
                updatedUser.validate();
                const userFromBackend = await updateMeAsync(updatedUserObject);
                setUser(userFromBackend);
                setSubmitCount(submitCount + 1);
            } catch (err) {
                setGlobalError(err);
            }
        },
        [setUser, submitCount]
    );

    // Update state with newest user on first render
    useEffect(() => {
        try {
            getMeAsync().then((user) => setUser(user));
        } catch (err) {
            setGlobalError(err);
        }
    }, [setUser]);

    const error = globalError === '' ? <Error>{globalError}</Error> : null;

    try {
        const user = Ensure.isNotNull(() => userMaybeNull);
        user.validate();

        const userForFormik: IUser = user;

        return (
            <>
                {error}
                <Formik
                    initialValues={userForFormik}
                    validationSchema={Validation.updateProfileSchema}
                    onSubmit={onSubmitAsync}
                >
                    <ProfileForm submitCount={submitCount} />
                </Formik>
            </>
        );
    } catch (err) {
        return error;
    }
};

export default Profile;
