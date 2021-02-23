/**
 * @file Definition of Delete User component
 */

import React, { FC, useCallback, useState, useMemo } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from 'react-router-dom';

import { HttpMethodTypes, IUser, PropTypes } from '../model';
import { apiCallAsync, Ensure, Timer } from '../utils';
import Error from './Error';

/**
 * Delete User Component
 * This component shows itself as a button until clicked.
 * Once the button is clicked, a modal shows up with the ability to upload users via CSV.
 *
 * @param props - Properties passed from parents to children
 * @param props.id - Id of the user to delete
 * @returns The CSV Upload modal component
 */
const DeleteUserModal: FC<PropTypes.DeleteUserModal> = ({ id }) => {
    const history = useHistory();

    type stateType = {
        showModal: boolean;
        deleted: boolean;
        deleting: boolean;
        error?: string;
    };

    const initialState: stateType = useMemo(
        () => ({
            showModal: false,
            deleted: false,
            deleting: false,
        }),
        []
    );

    const [state, setState] = useState(initialState);

    const { showModal, deleted, deleting, error } = state;

    const handleCancel = useCallback(() => setState(initialState), [setState, initialState]);

    const handleShow = useCallback(() => setState({ ...state, showModal: true }), [setState, state]);
    const setError = useCallback((error: string) => setState({ ...state, deleted: false, deleting: false, error }), [
        setState,
        state,
    ]);
    const setDeleting = useCallback(() => setState({ ...state, deleting: true }), [setState, state]);
    const setDeleted = useCallback(() => setState({ ...state, deleting: false, deleted: true }), [setState, state]);
    const handleDelete = useCallback(async () => {
        try {
            Ensure.isNotNull(() => id);
            setDeleting();

            // User cannot delete themselves
            const me = await apiCallAsync<IUser>(HttpMethodTypes.GET, '/Users/Me');

            if (id === me.id) {
                setError('You cannot delete yourself!');
                return;
            }

            // Delete user
            await apiCallAsync(HttpMethodTypes.DELETE, `/Users/Id/${id.toString()}`);
            setDeleted();

            // Wait for 3 seconds, then go home
            await Timer.waitSecondsAsync(3);
            history.push('/');
        } catch (e) {
            setError('Error deleting user.  Please try again later.');
            return;
        }
    }, [setDeleting, setDeleted, id, history, setError]);

    const preDeleteBodyText = 'Are you sure you want to delete this user? This action cannot be undone!';
    const deletingBodyText = 'Deleting this user...';
    const deletedBodyText = 'User deleted. Taking you to the home page...';

    const bodyText = deleting ? deletingBodyText : deleted ? deletedBodyText : preDeleteBodyText;

    const preDeleteButtonText = 'Delete User';
    const deletingButtonText = 'Deleting User...';
    const postDeleteButtonText = 'Deleted User';

    const buttonText = deleting ? deletingButtonText : deleted ? postDeleteButtonText : preDeleteButtonText;

    const errorComponent = error ? (
        <Row>
            <Col>
                <Error>{error}</Error>
            </Col>
        </Row>
    ) : null;

    return (
        <>
            <Button onClick={handleShow} variant="secondary" className="my-2 px-5">
                Delete User
            </Button>

            <Modal size="lg" show={showModal} onHide={handleCancel} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        {errorComponent}
                        <Row>
                            <Col>
                                <p className="font-weight-bold">{bodyText}</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel} disabled={deleting || deleted}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleDelete} disabled={deleting || deleted}>
                        {buttonText}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeleteUserModal;
