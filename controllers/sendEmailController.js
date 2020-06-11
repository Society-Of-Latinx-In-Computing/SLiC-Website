const express = require('express');

const contactFormEmailManager = require('../models/sendEmail');

const contactFormQuestion = require('../models/contactFormQuestion');

require('dotenv').config({path: '../.env'});

const router = express.Router();

router.post('/', (req, res) => {

    if(req.body.apiKey != process.env.SEND_EMAIL_API_KEY) {
        return res.render('Sorry About That, Error Occurred Sending Email');
    }

    let question = new contactFormQuestion(req.body.name, req.body.email, req.body.subject, req.body.message);
    
    try {
        contactFormEmailManager.sendEmail(question);
    }
    
    catch {
        return res.send('Sorry About That, Error Occurred Sending Email');
    }
    
    return res.send('OK');
});

module.exports = router;