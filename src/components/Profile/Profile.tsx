/**
 * @file Contains definitions for the Profile component
 */
import React, { FC, useCallback, useEffect } from 'react';
import { Formik } from 'formik';

import { PropTypes, User, Validation } from '../../model';
import { isNotNull } from '../../utils/ensure';
import ProfileForm from './ProfileForm';

/**
 * The Edit Profile Component
 *
 * @param props - Properties passed down from parents to children
 * @param props.user - The current user of the application
 * @param props.getUser - A function to refresh the current user from the backend
 * @param props.updateUser - A function to propogate user changes to the backend & redux store
 * @returns The Edit Profile Component
 */
const Profile: FC<PropTypes.Profile> = ({ user, getUser, updateUser }) => {
    // Create onSubmit callback to update user
    const onSubmitAsync = useCallback(
        async (values: User) => {
            try {
                await updateUser(values);
            } catch (err) {
                console.error(err);
            }
        },
        [updateUser]
    );

    // Update Redux store with newest user
    useEffect(() => {
        getUser();
    }, [getUser]);

    try {
        user = isNotNull(user);

        return (
            <Formik initialValues={user} validationSchema={Validation.updateProfileSchema} onSubmit={onSubmitAsync}>
                {({ errors, touched }) => <ProfileForm errors={errors} touched={touched} />}
            </Formik>
        );
    } catch (err) {
        return null;
    }
};

export default Profile;
