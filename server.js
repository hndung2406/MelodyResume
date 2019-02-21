const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Static folders
app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/images", express.static(__dirname + "/images"));

// Start the app
app.get('/', (req, res) => res.render('home'));

// Start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
