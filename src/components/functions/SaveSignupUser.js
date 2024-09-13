export const saveSignupUser = (values) => {
    const storedUserData = localStorage.getItem('users');

    let users = [];
    if (storedUserData) {
        users = JSON.parse(storedUserData);
    }

    const emailExists = users.some(user => user.email === values.email);
    if (emailExists) {
        return false;
    }

    users.push({
        username: values.username,
        email: values.email,
        password: values.password,
        todos: []
    });

    localStorage.setItem('users', JSON.stringify(users));
    return true;
}
