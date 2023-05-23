import {Router} from "express";
import jwt from 'jsonwebtoken';
import {getUserIfExists, checkUserCredentials, registerUser} from "../service/mongoDBAuthService.js";

const router = Router();

router.post("/register", async (req, res) => {
    console.log("req.body: " + req.body);
    const user = await getUserIfExists(req.body.user.username);
    if (user) {
        res.send({error: `the username '${user.username}' is already in use`});
    } else {
        const result = await registerUser(req.body.user);
        res.send({
            user: req.body.user,
            result: result
        });
    }
});

router.post("/login", async (req, res) => {
    const user = await getUserIfExists(req.body.user.username);
    if (!user) {
        res.status(418).send({error: req.body.user.username + " not found"});
    } else {
        if (!await checkUserCredentials(user, req.body.user.password)) {
            res.status(418).send({error: "incorrect password"});
        } else {
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '5m'
            });
            const {password, ...userNoPass} = user;
            res.send({
                user: userNoPass,
                token: token
            });
        }
    }
});

router.get("/auth", (req, res) => {
    const token = req.headers['authorization'];
    if (token == null) {
        return res.status(418).send({error: "authentication failed; no token"});
    } else {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(418).send({error: err});
            } else {
                const {iat, exp, ...cleanUser} = user;
                const token = jwt.sign(cleanUser, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: '5m'
                });
                const {password, ...userNoPass} = user;
                res.send({
                    user: userNoPass,
                    token: token
                });
            }
        });
    }

})

export default router;