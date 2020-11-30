type User = {
    token: string;
    email: string;
    admin: boolean;
    phone?: number;
};

export const noUser: User = {
    token: '',
    email: '',
    admin: false,
};

export default User;
