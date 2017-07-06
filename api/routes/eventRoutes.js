/**
 *
 * Event Routes
 *
 */

var express = require('express');
var router = express.Router();
var event = require('../models/eventModel');

router.get('/:id?',function(req,res,next){

    if(req.params.id){

        event.getEventById(req.params.id,function(err,rows){

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

        event.getAllEvents(function(err,rows){

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