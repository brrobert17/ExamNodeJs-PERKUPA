import express from 'express';
import cors from 'cors';
import session from 'express-session';
import * as dotenv from "dotenv";
import testRouter from "./router/testRouter.js";
import * as bodyParser from "express";
import authRouter from "./router/authRouter.js";
import http from "http";
import {Server} from "socket.io";
import {readDocs} from "./service/mongoDBService.js";
import concertsRouter from "./router/concertsRouter.js";
import utilsRouter from "./router/utilsRouter.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));
app.use(cors({
    credentials: true,
    origin: "*"
}));

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["*"]
    }
});

io.on("connection",  (socket) => {
    socket.on("concerts-req", async() => {
        const concerts = await readDocs("concerts");
        io.emit("concerts-res", concerts);
    })
});

app.use(testRouter);
app.use(authRouter);
app.use(concertsRouter);
app.use(utilsRouter);

server.listen(process.env.PORT, () => console.log("server running on port: " + process.env.PORT))