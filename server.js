var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;

var teams = require ("./api/routes/teamRoutes"),
    people = require("./api/routes/personRoutes");

app.use('/teams', teams);
app.use('/people', people);

app.listen(port);

console.log('Screening Management Platform REST API started on: ' + port);