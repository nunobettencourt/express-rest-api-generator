var express = require('express');
var router = express.Router();
var Person = require('../models/personModel');

router.get('/:id?',function(req,res,next){

    if(req.params.id){

        Person.getPersonById(req.params.id,function(err,rows){

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

        Person.getAllPeople(function(err,rows){

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