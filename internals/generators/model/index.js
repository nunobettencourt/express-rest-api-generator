/**
 * Model Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
    description: 'Add a new Model',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        validate: (value) => {
            if ((/.+/).test(value)) {
                return componentExists(value) ? 'A model with this name already exists' : true;
            }

            return 'The name is required';
        },
    }],
    actions: (data) => {
        // Generate index.js and index.test.js
        var modelTemplate = './model/model.hbs';
        var routeTemplate = './route/route.hbs'


        const actions = [{
            type: 'add',
            path: '../../api/models/{{camelCase name}}Model.js',
            templateFile: modelTemplate,
            abortOnFail: true,
        }, {
            type: 'add',
            path: '../../api/routes/{{camelCase name}}Routes.js',
            templateFile: routeTemplate,
            abortOnFail: true,
        },{
            type: 'modify',
            path: '../../server.js',
            pattern: /\W\n\/\*\sRoutes\s\*\//g,
            templateFile: './model/route.hbs'
        }];


        return actions;
    },
};