import {Router} from "express";
import {readDocById, updateDocById} from "../service/mongoDBService.js";

export const concertsRouter = new Router();

concertsRouter.patch("/concerts/ticket/:id", async (req, res) => {
    //let concert = await readDocById("concerts", req.params.id);
    let concert = req.body;
    concert = {...concert, tickets: concert.tickets-1};
    const {_id, ...cNoId} = concert;
    console.log(concert);
    await updateDocById("concerts", req.params.id, cNoId).then(data => {
            console.log(data);
        }
    );
    res.send({message: "success"});
})
