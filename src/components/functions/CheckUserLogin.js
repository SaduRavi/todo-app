export const checkUserLogin = (values) => {
    const storedUserData = localStorage.getItem('users');
    if (storedUserData) {
        const users = JSON.parse(storedUserData);
        const user = users.find(user => user.email == values.email && user.password == values.password);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            return true;
        }
    }
    return false;
}
