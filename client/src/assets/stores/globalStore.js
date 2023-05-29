import {writable} from "svelte/store";
import toast from "svelte-french-toast";
import {navigate} from "svelte-navigator";

const initialUser = {
    user: "",
    token: ""
}
//localStorage.setItem('user', "");
//console.log("item set to 0");
//localStorage.setItem('token', "");
export const authStore = writable(initialUser);

export const getToken = () => {
    return localStorage.getItem('token');
}

export const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : "";
}
export const logIn = (user, token) => {
    authStore.set({
        user: user,
        token: token});
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
};

export const invalidateUser = () => {
    console.log("invalid");
    authStore.set(initialUser);
    localStorage.setItem('user', "");
    localStorage.setItem('token', "");
}

export const logOut = () => {
    authStore.set(initialUser);
    localStorage.setItem('user', "");
    localStorage.setItem('token', "");
    toast.success("logged out successfully");
    setTimeout(()=>navigate("/"),500);
}