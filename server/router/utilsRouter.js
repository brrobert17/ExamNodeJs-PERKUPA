import {Router} from "express";
import sendMail from "../config/nodemailer.js";
import {createDoc, readDocs} from "../service/mongoDBService.js";

const router = Router();

router.post("/contact", async (req, res) => {
    const to = "perkupa.contact@pekupaband.com"
    const url = await sendMail(req.body.from, to, req.body.subject, req.body.text).catch(console.error);
    res.send({
        emailUrl: url
    });
});

router.get("/items", async (req, res) => {
    await readDocs('items').then(docs => res.send(docs))
        .catch(err => res.status(416).send({error: err}));
});

router.post("/items", async (req,res)=> {
    await createDoc('items', req.body).then(doc=> res.send(doc)).catch(err=> res.status(500).send(err));
})

router.post("/orders", async (req, res) => {
    const doc = await createDoc('orders', {userId: req.body.user._id, items: req.body.cart})
        .catch(err => res.status(416).send({error: err}));
    const from = "shop@perkupaband.com";
    const subject = "PERKUPA SHOP - order confirmation";
    const formattedString = doc.items.map(item => `${item.name} : (pcs: ${item.pcs})`).join('\n\n');
    const text = `Dear ${req.body.user.username}! Your order has been confirmed by PERKUPA SHOP.
        \n 
        Your order: \n\n ${formattedString}.
        \n\n
        Total price: ${doc.items.reduce((sum, item) => sum + item.price * item.pcs, 0)} DKK`;

    const emailUrl = await sendMail(from, req.body.user.email, subject, text)
        .catch(err => res.status(416).send({error: err}));

    res.send({
        doc: doc,
        emailUrl: emailUrl
    });
});

export default router;