const nodemailer = require('nodemailer');

require('dotenv').config({path: '../.env'});

exports.sendEmail = (question) => {    
    let transporter = nodemailer.createTransport({
        service: "gmail",
        secure: false, 
        auth: {
            user: process.env.SLIC_GMAIL_ACCOUNT,
            pass: process.env.SLIC_GMAIL_PASSWORD,  
        },
    });
    
    transporter.sendMail({
        from: `"SLiC Website Message" <${process.env.SLIC_GMAIL_ACCOUNT}>`, // sender address
        to: process.env.RECIEVER_OF_CONTACT_FORM_EMAILS, // list of receivers
        subject: `${question.subject}`, // Subject line
        html: `<b>Name:</b> ${question.name}<br/><b>Question:</b> ${question.message}<br/><b>Email:</b> ${question.email}`, // html body
    });
}