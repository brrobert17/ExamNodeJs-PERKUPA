import {db} from "./mondoDBconnection.js";

const concerts = [
    {
        title: "Debut TOUR 2023",
        dateTime: "2023-08-20T20:00:00",
        venue: "Great Concert Hall",
        tickets: 100,
        price: 100
    },
    {
        title: "Debut TOUR 2024",
        dateTime: "2023-08-20T20:00:00",
        venue: "Great Concert Hall",
        tickets: 100,
        price: 100
    },
    {
        title: "Debut TOUR 2025",
        dateTime: "2023-08-20T20:00:00",
        venue: "Great Concert Hall",
        tickets: 100,
        price: 100
    },
    {
        title: "Debut TOUR 2026",
        dateTime: "2023-08-20T20:00:00",
        venue: "Great Concert Hall",
        tickets: 100,
        price: 100
    },
    {
        title: "Debut TOUR 2027",
        dateTime: "2023-08-20T20:00:00",
        venue: "Great Concert Hall",
        tickets: 100,
        price: 100
    }
];

const collectionRef = db.collection("concerts");
await collectionRef.deleteMany();
await collectionRef.insertMany(concerts);
console.log("db-reset!");