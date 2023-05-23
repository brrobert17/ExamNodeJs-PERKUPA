import {db} from "../config/mondoDBconnection.js";
import {ObjectId} from "mongodb";

export const readDocs = async (collection) => {
    const collectionRef = db.collection(collection);
    return await collectionRef.find().toArray();
};

export const readDocById = async (collection, id) => {
    const collectionRef = db.collection(collection);
    const objectId = new ObjectId(id)
    return await collectionRef.findOne({_id: objectId});
};

export const createDoc = async (collection, doc) => {
    const collectionRef = db.collection(collection);
    await collectionRef.insertOne(doc);
    const id  = doc._id.toString();
    return {...doc, _id: id};
};

export const deleteDocById = async (collection, id) => {
    const collectionRef = db.collection(collection);
    const objectId = new ObjectId(id)
    return await collectionRef.deleteOne({_id: objectId});
};
export const updateDocById = async (collection, id, document) => {
    const collectionRef = db.collection(collection);
    const objectId = new ObjectId(id)
    return await collectionRef.updateOne({_id: objectId}, {$set:{...document}});
};
