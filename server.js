const express = require('express');

const bodyParser = require('body-parser');

const homeController = require('./controllers/homeController');

const sendEmailController = require('./controllers/sendEmailController');

require('dotenv').config();

const app = express();

// Middleware 

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static("public"));

// CORS
// Middleware To Set Headers
// https://stackoverflow.com/questions/23751914/how-can-i-set-response-header-on-express-js-assets
app.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", ["*"]);
    res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.append("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use('/', homeController);

app.use('/sendEmail', sendEmailController);

// redirects to homepage if a non-existent page is requested
app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(process.env.PORT, () => {
    console.log('running on port 3000!');
});