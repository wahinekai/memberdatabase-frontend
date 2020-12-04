/**
 * @file container logic connecting Logout component to redux store
 */

import { connect } from 'react-redux';

import { Logout } from '../components';

const LogoutContainer = connect(null, null)(Logout);

export default LogoutContainer;
