/**
 * @file Schemas for form validation
 */

import * as Yup from 'yup';
import 'yup-phone';

// Building Blocks
const email = Yup.string().email('Must enter a valid email').required('email is required');

const phoneNumber = Yup.string().required('Phone number is required');

export const updateProfileSchema = Yup.object().shape({
    email: email,
    phoneNumber: phoneNumber,
});

// TODO: Validation for states & countries - must be in country list, then state list
