/**
 * @file Definition of Upload CSV component
 */

import React, { FC, useCallback, useState, useEffect, useMemo, ChangeEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import FormGroup from 'react-bootstrap/FormGroup';
import Table from 'react-bootstrap/Table';
import { useHistory } from 'react-router-dom';
import bsCustomFileInput from 'bs-custom-file-input';
import FormFile from 'react-bootstrap/FormFile';
import { Guid } from 'guid-typescript';

import { HttpMethodTypes, IUploadUsersReturn, IUser, PropTypes } from '../model';
import { apiCallAsync, Ensure } from '../utils';
import { TextCenter } from './Style';
import Error from './Error';
import { Label } from './Forms';

/**
 * Upload Csv Component
 * This component shows itself as a button until clicked.
 * Once the button is clicked, a modal shows up with the ability to upload users via CSV.
 *
 * @param props - Properties passed from parents to children
 * @param props.requireRefresh - Set whether a refresh is required
 * @returns The CSV Upload modal component
 */
const UploadCsvModal: FC<PropTypes.UploadCsvModal> = ({ requireRefresh }) => {
    const USERS_TO_SHOW = 5;
    const history = useHistory();

    type stateType = {
        showModal: boolean;
        uploaded: boolean;
        uploading: boolean;
        error?: string;
        usersFromUpload?: IUploadUsersReturn;
        csvFile?: File;
    };

    const initialState: stateType = useMemo(
        () => ({
            showModal: false,
            uploaded: false,
            uploading: false,
        }),
        []
    );

    useEffect(() => bsCustomFileInput.init());

    const [state, setState] = useState(initialState);

    const { showModal, uploaded, uploading, error, csvFile, usersFromUpload } = state;

    const handleClose = useCallback(() => setState(initialState), [setState, initialState]);
    const handleShow = useCallback(() => setState({ ...state, showModal: true }), [setState, state]);
    const setUploading = useCallback(() => setState({ ...state, uploading: true }), [setState, state]);
    const setUploadError = useCallback(
        (error: string) => setState({ ...state, uploading: false, uploaded: false, error }),
        [setState, state]
    );
    const setUploaded = useCallback(
        (usersFromUpload: IUploadUsersReturn) =>
            setState({ ...state, uploading: false, uploaded: true, usersFromUpload }),
        [setState, state]
    );
    const setFile = useCallback((csvFile: File) => setState({ ...state, csvFile, uploaded: false }), [state, setState]);
    const clearFile = useCallback(() => setState({ ...state, csvFile: undefined }), [state, setState]);

    const uploadCsvFileAsync = useCallback(async () => {
        setUploading();
        try {
            const users = await apiCallAsync<IUploadUsersReturn>(HttpMethodTypes.POST, '/Users/Import/Csv', csvFile);
            setUploaded(users);
            requireRefresh();
        } catch (err) {
            setUploadError('Upload failed');
        }
    }, [setUploading, setUploaded, setUploadError, csvFile, requireRefresh]);

    const addFileToState = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            try {
                const filesMaybeNull = event.target.files;
                const files = Ensure.isNotNull(() => filesMaybeNull);
                Ensure.isTrue(() => files.length > 0);
                const csvFile = files[0];
                setFile(csvFile);
            } catch (err) {
                clearFile();
            }
        },
        [clearFile, setFile]
    );

    const handleButtonClick = useCallback(async () => {
        if (uploaded) {
            handleClose();
        } else if (csvFile) {
            await uploadCsvFileAsync();
        }
    }, [handleClose, uploadCsvFileAsync, csvFile, uploaded]);

    const onClickOfTableRow = useCallback((id?: Guid) => history.push(`/users/${id}`), [history]);

    const getUsersComponent = useCallback(
        (users: IUser[], title: string, allowClick = false) => {
            const usersToShow = users.filter((_user, index) => index < USERS_TO_SHOW);

            const usersComponentArray = usersToShow.map((user, index) => (
                <tr key={index} onClick={() => (allowClick ? onClickOfTableRow(user.id) : undefined)}>
                    <td>{`${user.firstName ?? ''} ${user.lastName ?? ''}`}</td>
                    <td>{user.email ?? ''}</td>
                </tr>
            ));

            const remaingUsersComponent =
                users.length > USERS_TO_SHOW ? (
                    <Row>
                        <Col>
                            <small>{`and ${users.length - USERS_TO_SHOW} more users.`}</small>
                        </Col>
                    </Row>
                ) : null;

            return (
                <>
                    <Row>
                        <Col>
                            <TextCenter>
                                <Modal.Title>{title}</Modal.Title>
                            </TextCenter>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table striped hover={allowClick}>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>{usersComponentArray}</tbody>
                            </Table>
                        </Col>
                    </Row>
                    {remaingUsersComponent}
                </>
            );
        },
        [USERS_TO_SHOW, onClickOfTableRow]
    );

    const errorComponent = error ? (
        <Row>
            <Col>
                <TextCenter>
                    <Error>{error}</Error>
                </TextCenter>
            </Col>
        </Row>
    ) : null;

    // Don't allow close during upload
    const closeDisabled = uploading;

    const buttonText = uploaded ? 'Done' : uploading ? 'Uploading' : 'Upload';

    const importedUsersComponent =
        usersFromUpload && usersFromUpload.importedUsers.length > 0
            ? getUsersComponent(usersFromUpload.importedUsers, 'Imported Users', true)
            : null;

    const invalidUsersComponent =
        usersFromUpload && usersFromUpload.invalidUsers.length > 0
            ? getUsersComponent(usersFromUpload.invalidUsers, 'Invalid Users')
            : null;

    const duplicateUsersComponent =
        usersFromUpload && usersFromUpload.duplicateUsers.length > 0
            ? getUsersComponent(usersFromUpload.duplicateUsers, 'Duplicate Users')
            : null;

    return (
        <>
            <Button block onClick={handleShow} variant="outline-primary" className="my-1">
                Upload users from CSV
            </Button>

            <Modal size="lg" show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Users from CSV File</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        {errorComponent}
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label htmlFor="csvFile">Upload CSV File</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormFile
                                        onChange={addFileToState}
                                        accept="text/csv"
                                        label="CSV File"
                                        custom
                                        name="csvFile"
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        {importedUsersComponent}
                        {invalidUsersComponent}
                        {duplicateUsersComponent}
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleButtonClick} disabled={closeDisabled}>
                        {buttonText}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UploadCsvModal;
