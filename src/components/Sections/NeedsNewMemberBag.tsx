/**
 * @file Defintion of Needs New Member Bag Section
 */

import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import { useFormikContext } from 'formik';

import { FormField, BooleanRadioField } from '../Forms';
import { PartialUser, PropTypes } from '../../model';

/**
 * A section of the edit profile form containing the information of a user needing a new member bag
 *
 * @param props - Properties passed down from parents to children
 * @param props.disabled - Whether this field is read-only.  Defaults to false.
 * @returns The component for the news a new member bag section of the form
 */
const NeedsNewMemberBag: FC<PropTypes.Section> = ({ disabled = false }) => {
    const { touched, errors } = useFormikContext<PartialUser.INeedsNewMemberBag>();

    return (
        <>
            <Col>
                <FormField
                    disabled={disabled}
                    error={errors.needsNewMemberBag}
                    touched={touched.needsNewMemberBag}
                    inputComponent={BooleanRadioField}
                    name="needsNewMemberBag"
                    label="Does this user need a new member bag?"
                />
            </Col>
        </>
    );
};

export default NeedsNewMemberBag;
