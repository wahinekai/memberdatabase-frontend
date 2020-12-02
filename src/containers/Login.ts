/**
 * @file container logic connecting Login component to redux store
 */

import { connect } from 'react-redux';

import { Login } from '../components';
import { onLogin } from '../store/actions';

const mapDispatchToProps = { onLogin };

const LoginContainer = connect(null, mapDispatchToProps)(Login);

export default LoginContainer;
