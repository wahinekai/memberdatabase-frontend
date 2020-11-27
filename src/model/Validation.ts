import * as Yup from 'yup';

// Building Blocks
const email = Yup.string().email('Must enter a valid email').required('email is required');

const phone = Yup.number().required('Phone number is required');

const username = Yup.string()
    .min(4, 'Username must be 4+ characters')
    .max(50, 'Username must be less than 50 characters')
    .required('Username is required');

const password = Yup.string().min(8, 'Password must be 8+ characters').required('Password is required');

// Complete schemas
export const loginSchema = Yup.object().shape({
    username: username,
    password: password,
});

export const registerSchema = Yup.object().shape({
    email: email,
    phone: phone,
    username: username,
    password: password,
});

export const updateProfileSchema = Yup.object().shape({
    email: email,
    phone: phone,
});
