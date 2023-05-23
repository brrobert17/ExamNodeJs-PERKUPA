import express from 'express';
import cors from 'cors';
import session from 'express-session';
import * as dotenv from "dotenv";
import testRouter from "./router/testRouter.js";
import * as bodyParser from "express";
import authRouter from "./router/authRouter.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));

app.use(testRouter);
app.use(authRouter);

app.listen(process.env.PORT, ()=> console.log("server running on port: " + process.env.PORT))