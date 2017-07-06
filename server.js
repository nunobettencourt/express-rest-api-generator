var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;

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