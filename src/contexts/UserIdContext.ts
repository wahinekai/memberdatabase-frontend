/**
 * @file Definition of UserId context
 */

import { Guid } from 'guid-typescript';
import { createContext } from 'react';

const UserIdContext = createContext(Guid.createEmpty());

export default UserIdContext;
