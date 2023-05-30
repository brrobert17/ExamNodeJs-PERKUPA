import {usersCollection} from "../config/mondoDBconnection.js";
import bcrypt from "bcrypt";
import {ObjectId} from "mongodb";

export const getUserIfExists = async (username) => {
    const foundUser = await usersCollection.findOne({username: username});
    if(foundUser) {
        return foundUser;
    }
};

export const registerUser = async (user) => {
        const encryptedPassword = await bcrypt.hash(user.password, 10);
    return await usersCollection.insertOne({...user, password: encryptedPassword, tickets: []});
};

export const checkUserCredentials = async (user, password) => {
    return await bcrypt.compare(password, user.password);
}

export const refreshUser = async (id) => {
    const objectId = new ObjectId(id);
    return await usersCollection.findOne({_id: objectId});
}
