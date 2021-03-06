/**
 *
 * Event Routes
 *
 */

const express = require('express');
const router = express.Router();
const Event = require('../models/eventModel');

router.get('/:id?',(req,res,next) => {

    if(req.params.id){

        Event.getEventById(req.params.id,(err,rows) => {

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

        Event.getAllEvents((err,rows) => {

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

router.post('/',(req,res,next) => {

    Event.addEvent(req.body,(err) => {

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

router.delete('/:id',(req,res,next) => {

    Event.deleteEvent(req.params.id,(err,count) => {

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(count);
        }

    });
});

router.put('/:id',(req,res,next) => {

    Event.updateEvent(req.params.id,req.body,(err,rows) => {

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports=router;