/**
 * @file Definition of User Card Component
 */

import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { PropTypes } from '../model';
import { settings, Predicates } from '../utils';
import { TextCenter } from '.';

/**
 * User Card Component
 *
 * @param props - React Properties passed down from parents to children
 * @param props.user - The user this card is displaying
 * @returns A User card
 */
const UserCard: FC<PropTypes.UserCard> = ({ user }) => {
    const image = user.photoUrl && user.photoUrl !== '' ? user.photoUrl : settings.emptyProfileImage;

    // Map and filter array
    const positionNamesWithNull = user.positions.map((position) =>
        position.ended ? undefined : position.name?.toString()
    );
    const positionNames = positionNamesWithNull.filter(Predicates.notNullOrUndefined);

    let positions = '';

    // Positions depends on length of positions
    switch (positionNames.length) {
        // If no position, position is "Member"
        case 0:
            positions = 'Member';
            break;
        // If two positions, combine with "and" - can't be combined with below because no comma
        case 2:
            positions = `${positionNames[0]} and ${positionNames[1]}`;
            break;
        // Default - 1 or 3+ positions - combine with commas, last has and
        // If only 1, will return first if statement
        default:
            positions = positionNames.reduce((accumulator, currentValue, index) => {
                // First member of array
                if (index === 0) {
                    return currentValue;
                }

                // Last member of array
                if (index === positionNames.length - 1) {
                    return `${accumulator}, and ${currentValue}`;
                }

                // Middle member
                return `${accumulator}, ${currentValue}`;
            });
            break;
    }

    const body = `${positions}, ${user.chapter} Chapter`;

    return (
        <TextCenter>
            <Card className="my-3">
                <Card.Img variant="top" src={image} alt="Profile picture" />
                <Card.Body>
                    <Card.Title>{`${user.firstName} ${user.lastName}`}</Card.Title>
                    <Card.Text>{body}</Card.Text>
                    <Button href={`/users/${user.id}`} variant="outline-primary" className="px-3 my-2">
                        View User
                    </Button>
                </Card.Body>
            </Card>
        </TextCenter>
    );
};

export default UserCard;
