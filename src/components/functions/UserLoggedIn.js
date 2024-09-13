export const isUserLoggedIn = () => {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser !== null;
};
