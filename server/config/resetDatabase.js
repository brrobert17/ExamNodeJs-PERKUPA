import {concertsCollection, db, usersCollection} from "./mondoDBconnection.js";

const concerts = [
    {
        title: "Debut TOUR 2023 - PUPKA PANK",
        dateTime: "2023-08-20T20:00:00",
        venue: "Budapest Park (HU)",
        tickets: 1000,
        price: 100,
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-05-31-11%3A45%3A07?alt=media&token=692b18fb-c7ce-48ae-a6af-cb683bfa3c5c'
    },
    {
        title: "Album release: B-sides & rarities",
        dateTime: "2023-10-20T21:00:00",
        venue: "Harpa Concert Hall (IS)",
        tickets: 2000,
        price: 100,
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-05-31-11%3A45%3A31?alt=media&token=16eb3973-7fb5-447c-9cf5-fa07eb614387'
    },
    {
        title: "Grand TOUR 2024",
        dateTime: "2024-04-20T20:00:00",
        venue: "Lille VEGA (DK)",
        tickets: 400,
        price: 100,
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-05-31-11%3A45%3A49?alt=media&token=60f0a710-466f-4630-97f3-607eb83ff1d7'
    },
    {
        title: "Grand TOUR 2024",
        dateTime: "2024-04-30T20:00:00",
        venue: "Store VEGA (DK)",
        tickets: 2000,
        price: 100,
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-05-31-11%3A45%3A49?alt=media&token=60f0a710-466f-4630-97f3-607eb83ff1d7'
    },
    {
        title: "Great Reunion Concert",
        dateTime: "2025-08-20T20:00:00",
        venue: "Copenhagen Royal Arena (DK)",
        tickets: 10000,
        price: 120,
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-05-31-11%3A46%3A36?alt=media&token=e2db9cdc-c0b3-423d-9273-0459ee55ebab'
    }
];
await concertsCollection.deleteMany();
await concertsCollection.insertMany(concerts);

const user = {
    username: 'admin',
    email: 'admin@gg.com',
    password: '$2b$10$qTYaCilVrqUPTFyA2iVAd.fWPw39n4J4hg1bfG2sO.xTsPKBnlYee',
    tickets: [],
    admin: true
};
await usersCollection.deleteMany();
await usersCollection.insertOne(user);

console.log("db-reset!");