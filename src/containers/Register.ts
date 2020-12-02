/**
 * @file container logic connecting Register component to redux store
 */

import { connect } from 'react-redux';

import { Register } from '../components';
import { onRegister } from '../store/actions';

const mapDispatchToProps = { onRegister };

const RegisterContinaer = connect(null, mapDispatchToProps)(Register);

export default RegisterContinaer;
