import React, { FC } from 'react';
import LoadingImage from './Loading.jpg';

const Loading: FC<null> = () => <img className="img-fluid" src={LoadingImage} alt="Loading your game experience..." />;

export default Loading;
