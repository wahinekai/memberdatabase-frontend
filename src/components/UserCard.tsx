/**
 * @file Definition of User Card Component
 */

import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Chapter, Position, PropTypes } from '../model';

const emptyProfileImage = 'https://www.clker.com/cliparts/B/R/Y/m/P/e/blank-profile-hi.png';

/**
 * User Card Component
 *
 * @param props - React Properties passed down from parents to children
 * @param props.user - The user this card is displaying
 * @returns A User card
 */
const UserCard: FC<PropTypes.UserCard> = ({ user }) => {
    const image = user.photoUrl && user.photoUrl !== '' ? user.photoUrl : emptyProfileImage;

    const position = user.position && user.position !== Position.Default ? user.position : 'Member';
    const chapter = user.chapter && user.chapter !== Chapter.Default ? `, ${user.chapter} Chapter` : '';
    const body = position + chapter;

    return (
        <div className="text-center">
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
        </div>
    );
};

export default UserCard;
