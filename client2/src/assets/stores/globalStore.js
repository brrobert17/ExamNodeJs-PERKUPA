import {writable} from "svelte/store";

const initialUser = {
    user: null,
    token: null
}
export const authStore = writable(initialUser);

export const getToken = () => {
    return localStorage.getItem('token');
}

export const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}
export const logIn = (user, token) => {
    authStore.set({
        user: user,
        token: token});
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
};

export const logOut = () => {
    authStore.set(initialUser);
    localStorage.setItem('user', null);
    localStorage.setItem('token', null);
}