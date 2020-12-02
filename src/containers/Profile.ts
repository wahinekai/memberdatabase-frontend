/**
 * @file container logic connecting Profile component to redux store
 */

import { connect } from 'react-redux';

import { Profile } from '../components';
import { getUser, onLogout, updateUser } from '../store/actions';
import { mapStateToProps } from '../store/utils';

const mapDispatchToProps = { updateUser, getUser, onLogout };

const ProfileContainer = connect(mapStateToProps.onlyUser, mapDispatchToProps)(Profile);

export default ProfileContainer;
