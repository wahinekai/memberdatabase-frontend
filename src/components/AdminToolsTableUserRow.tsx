/**
 * @file Definition of Admin Tools Table User Row Component
 */

import React, { FC, useCallback, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import { IUser, PropTypes, Validation } from '../model';
import { Ensure, Timer } from '../utils';
import AdminToolsTableUserCell from './AdminToolsUserCell';
import { TextCenter } from './Style';
import Error from './Error';

/**
 * Admin Tools Table User Row Component
 *
 * @param props - React properties passed down from parents to children
 * @param props.fields - User Fields to display
 * @param props.user - The user's data
 * @param props.setUser - Sets the user's data
 * @returns the component
 */
const AdminToolsTableUserRow: FC<PropTypes.AdminToolsTableUserRow> = ({ fields, user: userMaybeNull, setUser }) => {
    const history = useHistory();

    // Create state of user
    type StateType = {
        error?: string;
        submitting: boolean;
    };

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
        async (updatedUserObject: IUser) => {
            try {
                setSubmitting(true);

                await setUser(updatedUserObject);
                setState((state) => ({
                    ...state,
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
        [setSubmitting, setSubmitted, setUser]
    );

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

    const viewUser = useCallback(() => history.push(`/users/${userMaybeNull.id}`), [history, userMaybeNull]);
    const createActionButton = useCallback(
        (dirty: boolean, submitForm: () => Promise<void>) =>
            dirty ? (
                <Button variant="primary" type="submit" onClick={submitForm}>
                    {submitMessage}
                </Button>
            ) : (
                <Button variant="primary" onClick={viewUser}>
                    View User
                </Button>
            ),
        [submitMessage, viewUser]
    );
    try {
        const user = Ensure.isNotNull(() => userMaybeNull);

        const cells = fields.map((field, i) => (
            <AdminToolsTableUserCell name={field} user={user} key={i} disabled={submitting} />
        ));

        return (
            <>
                {errorComponent}
                <Formik
                    initialValues={user}
                    validationSchema={Validation.updateProfileSchema}
                    onSubmit={onSubmitAsync}
                    enableReinitialize
                >
                    {({ dirty, submitForm }) => (
                        <>
                            {cells}
                            <td key={-1}>{createActionButton(dirty, submitForm)}</td>
                        </>
                    )}
                </Formik>
            </>
        );
    } catch (err) {
        return null;
    }
};

export default AdminToolsTableUserRow;
