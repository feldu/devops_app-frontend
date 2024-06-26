export const validateSignInInput = ({username, password}) => {
    if ((username.length < 4 || username.length > 20) && (password.length < 4 || password.length > 20))
        return {isValid: false, message: "Логин и пароль должны содержать от 4 до 20 символов"};
    if (username.length < 4 || username.length > 20)
        return {isValid: false, message: "Логин должен содержать от 4 до 20 символов"};
    else if (password.length < 4 || password.length > 20)
        return {isValid: false, message: "Пароль должен содержать от 4 до 20 символов"};
    return {isValid: true, message: null};
};

export const validateSignUpInput = ({username, password, name, role}) => {
    if (username.length < 4 || username.length > 20)
        return {isValid: false, message: "Логин должен содержать от 4 до 20 символов"};
    else if (password.length < 4 || password.length > 20)
        return {isValid: false, message: "Пароль должен содержать от 4 до 20 символов"};
    if (name.length < 1 || name.length > 64)
        return {isValid: false, message: "ФИО не должно быть пустым и содержать более 64 символов"};
    else if (!["ROLE_MODERATOR", "ROLE_USER"].includes(role))
        return {isValid: false, message: "Ваша профессия указана не корректно"};
    return {isValid: true, message: null};
};