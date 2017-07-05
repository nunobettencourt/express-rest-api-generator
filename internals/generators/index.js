const fs = require("fs");
const path = require("path");
const modelGenerator = require("./model");
const routeGenerator = require("./route");


module.exports = (plop) => {
    plop.setGenerator('model', modelGenerator);
    plop.setGenerator('route', routeGenerator);
};