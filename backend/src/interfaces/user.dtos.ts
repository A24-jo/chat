interface UserRegisterDto {
    name: string;
    phone: string;
    email: string;
    password: string;
}

interface UserLoginDto {
    phone?: string;
    email?: string;
    password: string;
}

interface ReturnUserLoged {
    user?: Object;
    token?: string;
    error?: string;
}
