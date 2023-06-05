import toast from "svelte-french-toast";
import {navigate} from "svelte-navigator";
import {writable} from "svelte/store";

export const getToken = () => {
    return localStorage.getItem('token');
}

export const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : "";
}
export const logIn = (user, token) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
};

export const invalidateUser = () => {
    //console.log("token expired, user invalidated");
    localStorage.setItem('user', "");
    localStorage.setItem('token', "");
}

export const logOut = () => {
    localStorage.setItem('user', "");
    localStorage.setItem('token', "");
    toast.success("logged out successfully");
    setTimeout(()=>navigate("/"),500);
}