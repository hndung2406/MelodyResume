const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const moment = require('moment');

const port = 3000;

//Register partials
hbs.registerPartials(__dirname + '/views/partials');

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Static folders
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/images", express.static(__dirname + "/public/images"));

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({
    extended: true
}));

// Start the app
app.get('/', (req, res) => {
    res.render('home');
});

// Contact route
app.get('/contact', (req, res) => {
    if (req.query.success) {
        var success = req.query.success;
        res.render('contact', {
            success: success
        });
    } else if (!req.query.error) {
        var error = req.query.error;
        res.render('contact', {
            error: error
        });
    } else {
        res.render('contact');
    }
});

// Send mail
app.post('/send', (req, res) => {

    const output=`
    <h3>Contact Details</h3>
    <ul>
      <li>Name is : ${req.body.name}</li>
      <li>Email is : ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hndung2406@gmail.com',
            pass: 'Shiinamashiro2406!'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var mailOptions = {
        from: `${req.body.name}` + req.body.email,
        to: 'hndung2406@gmail.com',
        subject: req.body.subject,
        text: 'Your have a new contact request',
        html: output
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            var error = true;
            res.redirect('/contact?error=' + error);
        } else {
            var success = true;
            res.redirect('/contact?success=' + success);
        }
    });

});

// Start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
