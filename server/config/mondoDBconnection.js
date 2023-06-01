import {MongoClient} from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

//console.log(client);
export const db = client.db("perkupa_db");
export const usersCollection = db.collection('users');
export const concertsCollection = db.collection('concerts');
export const testCollection = db.collection("testConnection");

