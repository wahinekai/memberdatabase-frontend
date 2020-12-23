/**
 * @file Definition of User Card Component
 */

import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Chapter, PropTypes } from '../model';
import { settings } from '../utils';
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

    let positionsString = '';

    user.positions.forEach((position) => {
        if (!position.ended) {
            positionsString += `${position.name ?? ''}, `;
        }
    });

    const positions = positionsString !== '' ? positionsString : 'Member, ';
    const chapter = user.chapter && user.chapter !== Chapter.Default ? `${user.chapter} Chapter` : '';
    const body = positions + chapter;

    return (
        <TextCenter>
            <Card>
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
