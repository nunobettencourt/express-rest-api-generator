var express = require('express');
var router = express.Router();
var Person = require('../models/personModel');

router.get('/:id?',(req,res,next) => {

    if(req.params.id){

        Person.getPersonById(req.params.id,(err,rows) => {

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

        Person.getAllPeople((err,rows) => {

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