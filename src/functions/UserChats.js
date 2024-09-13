export const getUserTodo = () => {
    const currentUserData = localStorage.getItem('currentUser');
    if (currentUserData) {
        const currentUser = JSON.parse(currentUserData);
        const currentUserEmail = currentUser.email;

        const storedUserData = localStorage.getItem('users');
        if (storedUserData) {
            const users = JSON.parse(storedUserData);
            const user = users.find(user => user.email === currentUserEmail);
            if (user) {
                return user.todos;
            }
        }
    }
    return [];
}

export const updateUserTodo = (itemList) => {
    const currentUserData = localStorage.getItem('currentUser');
    if (currentUserData) {
        const currentUser = JSON.parse(currentUserData);
        const currentUserEmail = currentUser.email;

        const storedUserData = localStorage.getItem('users');
        if (storedUserData) {
            const users = JSON.parse(storedUserData);
            const userIndex = users.findIndex(user => user.email === currentUserEmail);
            if (userIndex !== -1) {
                users[userIndex].todos = itemList;
                localStorage.setItem('users', JSON.stringify(users));
            }
        }
    }
}
