const nodemailer = require('nodemailer');

require('dotenv').config({path: '../.env'});

class ContantFormQuestion {
    constructor(name, email, subject, message) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }

    sendEmail() {
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
            subject: `${this.subject}`, // Subject line
            html: `<b>Name:</b> ${this.name}<br/><b>Question:</b> ${this.message}<br/><b>Email:</b> ${this.email}`, // html body
        });
    }
}

module.exports = ContantFormQuestion;