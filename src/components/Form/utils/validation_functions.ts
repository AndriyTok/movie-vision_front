export const validatePassword = (password: string): boolean => {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
};

export const passwordsMatch = (password: string, confirmPassword: string): boolean => {
    return password === confirmPassword;
};