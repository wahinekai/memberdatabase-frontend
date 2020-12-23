/**
 * @file Definition of Profile Photo Upload Component
 */

import { useField, useFormikContext } from 'formik';
import React, { ChangeEvent, FC, useCallback, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormFile from 'react-bootstrap/FormFile';
import FormGroup from 'react-bootstrap/FormGroup';
import Image from 'react-bootstrap/esm/Image';
import bsCustomFileInput from 'bs-custom-file-input';

// import { TextCenter } from '..';
import { HttpMethodTypes, PropTypes } from '../../model';
import { apiCallAsync, Ensure, settings } from '../../utils';
import { Label } from '..';

/**
 * A Component for uploading profile photos and adding them to the formik form
 *
 * @param props - Properties passed down from parents to children
 * @returns The Formik Component
 */
const ProfilePhoto: FC<PropTypes.ProfilePhoto> = (props) => {
    const [field] = useField<string>(props);
    const { setFieldValue } = useFormikContext();

    useEffect(() => bsCustomFileInput.init());

    const uploadProfilePhoto = useCallback(
        async (event: ChangeEvent<HTMLInputElement>) => {
            const filesMaybeNull = event.target.files;
            const files = Ensure.isNotNull(() => filesMaybeNull);
            if (files.length > 0) {
                const photo = files[0];
                const newUrl = await apiCallAsync<string>(HttpMethodTypes.POST, '/Upload/ProfilePhoto', photo);
                setFieldValue(props.name, newUrl);
            } else {
                setFieldValue(props.name, '');
            }
        },
        [props.name, setFieldValue]
    );

    const photoUrl = field.value !== undefined && field.value !== '' ? field.value : settings.emptyProfileImage;

    return (
        <FormGroup>
            <Row>
                <Col>
                    <Label htmlFor={props.name}>Profile Photo</Label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={photoUrl} rounded height={150} width={200} className="mb-3 mt-2" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormFile
                        onChange={uploadProfilePhoto}
                        isInvalid={props.touched && props.error !== undefined}
                        feedback={props.error}
                        accept="image/x-png,image/jpeg"
                        label="Upload Photo"
                        custom
                    />
                </Col>
            </Row>
        </FormGroup>
    );
};

export default ProfilePhoto;
