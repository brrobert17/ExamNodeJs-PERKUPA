import {concertsCollection, db, itemsCollection, ordersCollection, usersCollection} from "./mondoDBconnection.js";

const concerts = [
    {
        title: "Debut TOUR 2023 - PUPKA PANK",
        dateTime: new Date("2023-07-20T20:00:00"),
        venue: "Budapest Park (HU)",
        tickets: 1000,
        price: 100,
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-05-31-11%3A45%3A07?alt=media&token=692b18fb-c7ce-48ae-a6af-cb683bfa3c5c'
    },
    {
        title: 'HORSEFLY TEMPO - HIGHEST OF INTENSITIES',
        venue: 'International Space Station',
        tickets: 100000,
        price: 1,
        dateTime: new Date('2023-08-20T20:00'),
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-06-02-12%3A20%3A54?alt=media&token=fbcef5ec-34a3-4381-80ac-5b17edd97285'
    },
    {
        title: "Album release: B-sides & rarities",
        dateTime: new Date("2023-10-20T21:00:00"),
        venue: "Harpa Concert Hall (IS)",
        tickets: 2000,
        price: 100,
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-05-31-11%3A45%3A31?alt=media&token=16eb3973-7fb5-447c-9cf5-fa07eb614387'
    },
    {
        title: "Grand TOUR 2024",
        dateTime: new Date("2024-04-20T20:00:00"),
        venue: "Lille VEGA (DK)",
        tickets: 400,
        price: 100,
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-05-31-11%3A45%3A49?alt=media&token=60f0a710-466f-4630-97f3-607eb83ff1d7'
    },
    {
        title: "Great Reunion Concert",
        dateTime: new Date("2025-08-20T20:00:00"),
        venue: "Copenhagen Royal Arena (DK)",
        tickets: 10000,
        price: 120,
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-05-31-11%3A46%3A36?alt=media&token=e2db9cdc-c0b3-423d-9273-0459ee55ebab'
    },
    {
        title: "Grand TOUR 2024",
        dateTime: new Date("2024-04-30T20:00:00"),
        venue: "Store VEGA (DK)",
        tickets: 2000,
        price: 100,
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-05-31-11%3A45%3A49?alt=media&token=60f0a710-466f-4630-97f3-607eb83ff1d7'
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

const items = [
    {
        name: "PERKUPA T-shirt PANK",
        price: 100,
        description: '100% cotton, fair-trade, packaging from renewable sources, unisex. ' +
            'Sizes available: S-XL: leave the required sizes in the comment.',
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-06-05-09%3A58%3A43?alt=media&token=525831c4-5408-48b6-9160-9f7560ba9ae1'
    },
    {
        name: "PERKUPA T-shirt 'fáj az élet'",
        price: 100,
        description: '100% cotton, fair-trade, packaging from renewable sources, unisex. ' +
            'Sizes available: S-XL: leave the required sizes in the comment.',
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-06-05-09%3A58%3A43?alt=media&token=525831c4-5408-48b6-9160-9f7560ba9ae1'
    },
    {
        name: "PERKUPA B-SIDES & RARITIES VINYL",
        price: 200,
        description: 'Debut album in vinyl format. Leave the owners name in the comment to get it dedicated by the band.',
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-06-05-23%3A21%3A48?alt=media&token=f948ef39-5cea-4e4a-a0a9-229cfcf772e1'
    },
    {
        name: "PERKUPA B-SIDES & RARITIES CD",
        price: 175,
        description: 'Debut album in compact disc format. Leave the owners name in the comment to get it dedicated by the band.',
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-06-05-23%3A21%3A08?alt=media&token=4fe76d4b-c7fc-4d74-b0ad-85d6dc2d3c62'
    },
    {
        name: "PERKUPA BEST OF COLLECTION VINYL",
        price: 200,
        description: 'BEST OF album in vinyl format. Leave the owners name in the comment to get it dedicated by the band.',
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-06-05-23%3A21%3A48?alt=media&token=f948ef39-5cea-4e4a-a0a9-229cfcf772e1'
    },
    {
        name: "PERKUPA BEST OF COLLECTION CD",
        price: 175,
        description: 'BEST OF album in compact disc format. Leave the owners name in the comment to get it dedicated by the band.',
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-06-05-23%3A21%3A08?alt=media&token=4fe76d4b-c7fc-4d74-b0ad-85d6dc2d3c62'
    },
    {
        name: "PERKUPA 'délivonat' MUG",
        price: 75,
        description: '400ml, A fantastic addition to your kitchen.',
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-06-05-09%3A58%3A17?alt=media&token=9ceb5956-d4cf-4018-9331-27df582db74f'
    },
    {
        name: "PERKUPA 'bandmembers' MUG",
        price: 75,
        description: '400ml, A fantastic addition to your kitchen.',
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-06-05-09%3A58%3A17?alt=media&token=9ceb5956-d4cf-4018-9331-27df582db74f'
    },
    {
        name: "PERKUPA 'HORSEFLY' stickers",
        price: 50,
        description: '10pcs of the extremely tasteful horsefly stickers',
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-06-02-12%3A20%3A54?alt=media&token=fbcef5ec-34a3-4381-80ac-5b17edd97285'
    },
    {
        name: "PERKUPA 'ATTIC DONKEYS' stickers",
        price: 50,
        description: '10pcs of the extremely tasteful attic monkeys stickers',
        img: 'https://firebasestorage.googleapis.com/v0/b/perkupa-band-web-app.appspot.com/o/images%2Fimg2023-05-31-11%3A46%3A36?alt=media&token=e2db9cdc-c0b3-423d-9273-0459ee55ebab'
    }
]

await itemsCollection.deleteMany();
await itemsCollection.insertMany(items);

await ordersCollection.deleteMany();

console.log("db-reset!");