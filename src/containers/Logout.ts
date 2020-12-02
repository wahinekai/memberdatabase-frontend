/**
 * @file container logic connecting Logout component to redux store
 */

import { connect } from 'react-redux';

import { Logout } from '../components';
import { onLogout } from '../store/actions';

const mapDispatchToProps = { onLogout };

const LogoutContainer = connect(null, mapDispatchToProps)(Logout);

export default LogoutContainer;
