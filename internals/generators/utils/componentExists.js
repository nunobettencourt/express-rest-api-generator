/**
 * componentExists
 *
 * Check whether the given component exist in either the models or routes directory
 */

const fs = require('fs');
const path = require('path');
const routes = fs.readdirSync(path.join(__dirname, '../../../api/routes'));
const models = fs.readdirSync(path.join(__dirname, '../../../api/models'));
const components = routes.concat(models);

function componentExists(comp) {
    return components.indexOf(comp) >= 0;
}

module.exports = componentExists;