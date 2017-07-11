const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");

/* Init App */
const app = express();

/* Define Port */
const port = process.env.PORT || 3000;

/* Body Parser Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

/* Express Session */
app.use(session({
    secret: "secret",
    saveUninitialized: true,
    resave: true
}));

/* Express Messages */
app.use(require("connect-flash")());
app.use((req, res, next) => {
    res.locals.messages = require("express-messages")(req, res);
    next();
});

/* Express Validator */
app.use(expressValidator({
    errorFormatter: (param, msg, value) => {
        let namespace = param.split(".")
        ,   root = namespace.shift()
        ,   formParam = root;

        while (namespace.length) {
            formParam += "[" + namespace.shift() + "]";
        }
        return {
            param:  formParam,
            msg:    msg,
            value:  value
        };
    }
}));

const teams = require ("./api/routes/teamRoutes");
const people = require("./api/routes/personRoutes");
const role = require("./api/routes/roleRoutes");
const event = require("./api/routes/eventRoutes");

/* Routes */
app.use('/event', event);
app.use('/teams', teams);
app.use('/people', people);
app.use('/role', role);

app.listen(port, () => {
    console.log('Screening Management Platform REST API started on: ' + port);
});

