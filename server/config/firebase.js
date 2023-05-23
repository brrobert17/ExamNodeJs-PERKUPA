import {getStorage, ref} from "firebase/storage";
import { initializeApp } from "firebase/app";
import {firebaseConfig} from "./firebase-private/config.js";
import {getAuth} from "firebase/auth";

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const storageImagesRef = ref(storage, "images");