const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Static folders
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/images", express.static(__dirname + "/public/images"));

// Start the app
app.get('/', (req, res) => {
    res.render('home');
});

//Contact route
app.get('/contact', (req, res) => {
    res.render('contact');
});

// Start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
