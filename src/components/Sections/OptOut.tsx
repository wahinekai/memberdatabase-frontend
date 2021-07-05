/**
 * @file Defintion of Opt Out Section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { useFormikContext } from 'formik';

import { FormField, BooleanRadioField } from '../Forms';
import { PartialUser, PropTypes, userFieldLabels } from '../../model';

/**
 * A section of the edit profile form containing the information of a user opting out of services
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for the opt out section of the form
 */
const OptOut: FC<PropTypes.Section> = ({ disabled = false }) => {
    const { touched, errors } = useFormikContext<PartialUser.IOptOut>();
    const name = 'socialMediaOptOut';

    return (
        <Col>
            <FormField
                disabled={disabled}
                error={errors[name]}
                touched={touched[name]}
                inputComponent={BooleanRadioField}
                name={name}
                label={userFieldLabels[name]}
            />
        </Col>
    );
};

export default OptOut;
