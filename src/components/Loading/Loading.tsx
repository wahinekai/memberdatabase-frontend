/**
 * @file Loading image component
 */

import React, { FC } from 'react';
import Image from 'react-bootstrap/Image';

import LoadingImage from './Loading.jpg';

/**
 * Loading image component
 *
 * @returns Loading image component
 */
const Loading: FC = () => <Image src={LoadingImage} alt="Loading..." fluid />;

export default Loading;
