/**
 * @file Definition of Admin Tools Table User Cell Component
 */

import React, { FC } from 'react';
import { plainToClass } from 'class-transformer';
import Image from 'react-bootstrap/esm/Image';
import { useFormikContext } from 'formik';

import { IUser, userFields, PropTypes, User, EnteredStatus, Level, Chapter, MemberStatus } from '../../model';
import { DateUtils, settings } from '../../utils';
import {
    BooleanRadioField,
    CountryPickerField,
    DatePickerField,
    Input,
    InputArray,
    PhoneNumber,
    RegionPickerField,
    Select,
} from '../Forms';

import Error from '../Error';

/**
 * Admin Tools Table User Cell Component
 *
 * @param props - React properties passed down from parents to children
 * @returns the component
 */
const UserCell: FC<PropTypes.AdminToolsTableUserCell> = (props) => {
    const { touched, errors } = useFormikContext<IUser>();

    const { user, name } = props;
    const userAsClass = plainToClass(User, user);
    const photoUrl = user.photoUrl !== undefined && user.photoUrl !== '' ? user.photoUrl : settings.emptyProfileImage;
    // Get form fields for each field
    let component = null;

    const keyofName = name as keyof IUser;

    const error = errors[keyofName] && touched[keyofName] ? <Error>{errors[keyofName]}</Error> : null;

    switch (name) {
        case 'positions':
            // Not editable here
            if (user.positions.length > 0) {
                const { name, started, ended } = user.positions[user.positions.length - 1];
                const startedDate = new Date(started ?? 0);
                const endedDate = new Date(ended ?? 0);
                if (ended) {
                    component = `${name} from ${DateUtils.toDateString(
                        new Date(startedDate ?? '')
                    )} to ${DateUtils.toDateString(endedDate)}`;
                } else {
                    component = `${name} since ${DateUtils.toDateString(startedDate)}`;
                }
            }
            break;
        case 'status':
            // Done - select component
            component = (
                <Select
                    disabled={props.disabled}
                    placeholder={props.placeholder}
                    name={name}
                    selectType={MemberStatus}
                />
            );
            break;
        case 'region':
            // Done - region picker field
            component = <RegionPickerField name={name} disabled={props.disabled} country={user.country} />;
            break;
        case 'country':
            // Done - country picker field
            component = <CountryPickerField name={name} disabled={props.disabled} />;
            break;
        case 'chapter':
            // Done - select component
            component = (
                <Select disabled={props.disabled} placeholder={props.placeholder} name={name} selectType={Chapter} />
            );
            break;
        case 'level':
            // Done - select component
            component = (
                <Select disabled={props.disabled} placeholder={props.placeholder} name={name} selectType={Level} />
            );
            break;
        case 'photoUrl':
            // Done - cannot be changed just viewed
            component = <Image src={photoUrl} height={75} />;
            break;
        case 'phoneNumber':
            // Done - requires special component
            component = <PhoneNumber disabled={props.disabled} placeholder={props.placeholder} name={name} />;
            break;
        case 'email':
            // Done - requires specific input type
            component = <Input name={name} placeholder={props.placeholder} disabled={props.disabled} type="email" />;
            break;
        case 'id':
            // Done - cannot be changed - just viewed
            component = user.id;
            break;
        case 'age':
            // Done - cannot be change - just viewed
            component = userAsClass.age;
            break;
        default:
            if (userFields.booleanFields.includes(name)) {
                // Boolean component -use boolean field
                component = <BooleanRadioField name={name} disabled={props.disabled} />;
            } else if (userFields.dateFields.includes(name)) {
                // Date component - use a date picker field
                component = <DatePickerField disabled={props.disabled} placeholder={props.placeholder} name={name} />;
            } else if (userFields.arrayFields.includes(name)) {
                // Input array component - use an input array field
                component = <InputArray disabled={props.disabled} placeholder={props.placeholder} name={name} />;
            } else if (userFields.facebookFields.includes(name)) {
                // Input array component - use an input array field
                component = (
                    <Select
                        disabled={props.disabled}
                        placeholder={props.placeholder}
                        name={name}
                        selectType={EnteredStatus}
                    />
                );
            } else {
                // General input - use a general input field
                component = <Input name={name} placeholder={props.placeholder} disabled={props.disabled} />;
            }
    }

    return (
        <td>
            {error}
            {component}
        </td>
    );
};

export default UserCell;
