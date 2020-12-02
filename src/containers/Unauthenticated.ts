/**
 * @file connects the Unauthenticated component to the Redux Store
 */

import { connect } from 'react-redux';
import { Unauthenticated } from '../components';
import { mapStateToProps } from '../store/utils';

const UnauthenticatedContainer = connect(mapStateToProps.onlyUser, null)(Unauthenticated);

export default UnauthenticatedContainer;
