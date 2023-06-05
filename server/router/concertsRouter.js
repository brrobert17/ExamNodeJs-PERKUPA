import {Router} from "express";
import {createDoc, readDocById, updateDocById} from "../service/mongoDBService.js";
import sendMail from "../config/nodemailer.js";
import {uploadImage} from "../service/firebaseStorageService.js";
import multer from "multer";

const router = new Router();
const upload = multer({limits: { fieldSize: 25 * 1024 * 1024 }}).single('image');

router.patch("/concerts/ticket/:id", async (req, res) => {
    let concert = req.body.concert;
    let user = req.body.user;

    //handle concert & tickets
    const newTickets = concert.tickets - req.body.pcs;
    concert = {...concert, tickets: newTickets};
    const {_id, ...cNoId} = concert;
    await updateDocById("concerts", req.params.id, cNoId);

    //handle user & newTicket
    let userTickets = user.tickets;
    //in case the user already ownes tickets to the same concert
    if(userTickets.some((ticket) => ticket.concertId === req.params.id )) {
        const index = userTickets.findIndex((ticket)=> ticket.concertId === req.params.id);
        userTickets[index].pcs += req.body.pcs;
    } else {
        userTickets = [...userTickets, {pcs: req.body.pcs, concertId: req.params.id}]
        //userTickets.push({pcs: req.body.pcs, concertId: req.params.id})
    }
    user = {...user, tickets: userTickets};
    await updateDocById("users", user._id, {tickets: userTickets});
    const text = `Dear ${user.username}! Congatulations to buying ${req.body.pcs} ticket(s) to ${concert.title}!
    We hope you will enjoy the show at ${concert.venue} on ${concert.dateTime}!`;
    const url = await sendMail(user.email, text).catch(console.error);
    res.send({
        user: user,
        message: "success",
        emailUrl: url
    });
});

router.post("/concerts/image", upload, async (req, res) => {
    await uploadImage(req.body.file).then(result => res.send(result)).catch((error) => {
        console.log(error);
        res.status(500).send(error);
    });
});

router.post('/concerts', async (req, res) => {
    const doc = await createDoc('concerts', req.body).catch((err)=>{
        console.log(err);
        res.status(416).send({error: err});
    });
    res.send(doc);
});

router.get('/concerts/:id', async (req, res)=> {
    const concert = await readDocById('concerts', req.params.id).catch((err)=> {
        console.log(err);
        res.status(416).send({error: err});
    });
    if(!concert) {
        res.status(404).send({message: 'not found'});
    }
    res.send(concert);
});

export default router;
