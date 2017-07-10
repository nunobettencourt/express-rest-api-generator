const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const expressValidator = require("express-validator");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");

var app = express();
var port = process.env.PORT || 3000;

/* Body Parser Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

var teams = require ("./api/routes/teamRoutes");
var people = require("./api/routes/personRoutes");
var role = require("./api/routes/roleRoutes");
var event = require("./api/routes/eventRoutes");

/* Routes */
app.use('/event', event);
app.use('/teams', teams);
app.use('/people', people);
app.use('/role', role);

app.listen(port);

console.log('Screening Management Platform REST API started on: ' + port);