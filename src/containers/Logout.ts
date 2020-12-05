/**
 * @file container logic connecting Logout component to redux store
 */

import { connect } from 'react-redux';
import { Logout } from '../components';

import { logout } from '../store/actions';
import { mapStateToProps } from '../store/utils';

const mapDispatchToProps = { onLogout: logout };

const LogoutContainer = connect(mapStateToProps.onlyUser, mapDispatchToProps)(Logout);

export default LogoutContainer;
