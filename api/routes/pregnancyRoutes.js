/**
 *
 * Pregnancy Routes
 *
 */

const express = require('express');
const router = express.Router();
const pregnancy = require('../models/pregnancyModel');
const passport = require('passport');

router.get('/:id?', passport.authenticate('jwt', { session: false}),(req,res,next) => {

    if(req.params.id){

        pregnancy.getPregnancyById(req.params.id,function(err,rows){

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

        pregnancy.getAllPregnancys((err,rows) => {

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