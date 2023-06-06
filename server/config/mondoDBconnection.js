import {MongoClient} from "mongodb";

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

//console.log(client);
export const db = client.db("perkupa_db");
export const usersCollection = db.collection('users');
export const concertsCollection = db.collection('concerts');
export const itemsCollection = db.collection('items');
export const ordersCollection = db.collection('orders');
export const testCollection = db.collection("testConnection");

