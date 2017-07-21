const express = require('express');
const router = express.Router();
const Person = require('../models/personModel');
const passport = require('passport');

router.get('/:id?', passport.authenticate('jwt', { session: false}), (req,res,next) => {

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