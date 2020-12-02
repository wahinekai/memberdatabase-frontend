/**
 * @file Loading image component
 */

import React, { FC } from 'react';
import LoadingImage from './Loading.jpg';

/**
 * Loading image component
 *
 * @returns Loading image component
 */
const Loading: FC = () => <img className="img-fluid" src={LoadingImage} alt="Loading..." />;

export default Loading;
