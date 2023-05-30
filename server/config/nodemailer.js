import nodemailer from "nodemailer";


async function sendMail(email, text) {

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: process.env.ETHEREAL_MAIL,
            pass: process.env.ETHEREAL_PASS
        },
    });

    let info = await transporter.sendMail({
        from: "perkupa.tickets@perkupaband.com",
        to: email,
        subject: "PERKUPA BAND LIVE ticket purchase",
        text: text
    });
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return(nodemailer.getTestMessageUrl(info));
}

export default sendMail;
