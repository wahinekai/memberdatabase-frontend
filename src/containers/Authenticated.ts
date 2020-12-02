/**
 * @file connects the Authenticated component to the Redux Store
 */

import { connect } from 'react-redux';
import { Authenticated } from '../components';
import { mapStateToProps } from '../store/utils';

const AuthenticatedContainer = connect(mapStateToProps.onlyUser, null)(Authenticated);

export default AuthenticatedContainer;
