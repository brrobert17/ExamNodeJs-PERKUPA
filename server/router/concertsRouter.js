import {Router} from "express";
import {createDoc, readDocById, updateDocById} from "../service/mongoDBService.js";
import sendMail from "../config/nodemailer.js";

export const concertsRouter = new Router();

concertsRouter.patch("/concerts/ticket/:id", async (req, res) => {
    let concert = req.body.concert;
    let user = req.body.user;

    //handle concert & tickets
    const newTickets = concert.tickets - req.body.pcs;
    concert = {...concert, tickets: newTickets};
    const {_id, ...cNoId} = concert;
    await updateDocById("concerts", req.params.id, cNoId).then(data => {
            console.log(data);
        }
    );

    //handle user & newTicket
    let userTickets = user.tickets;
    userTickets.push({pcs: req.body.pcs, concertId: req.params.id})
    user = {...user, tickets: userTickets};
    let user2 = await updateDocById("users", user._id, {tickets: userTickets});
    console.log(user2);
    const text = `Dear ${user.username}! Congatulations to buying ${req.body.pcs} ticket(s) to ${concert.title}!
    We hope you will enjoy the show at ${concert.venue} on ${concert.dateTime}!`;
    const url = await sendMail(user.email, text).catch(console.error);
    res.send({
        message: "success",
        emailUrl: url
    });
});

concertsRouter.post('/concerts', async (req, res) => {
    const doc = await createDoc('concerts', req.body).catch((err)=>{
        console.log(err);
        res.status(416).send({error: err});
    });
    res.send(doc);

})
