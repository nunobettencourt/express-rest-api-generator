/**
 *
 * Role Routes
 *
 */

var express = require('express');
var router = express.Router();
var role = require('../models/roleModel');

router.get('/:id?',function(req,res,next){

    if(req.params.id){

        role.getRoleById(req.params.id,function(err,rows){

            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{

        role.getAllRoles(function(err,rows){

            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }

        });
    }
});

module.exports=router;