const express = require('express');
const router = express.Router();
const Team = require('../models/teamModel');

router.get('/:id?',(req,res,next) => {

    if(req.params.id){

        Team.getTeamById(req.params.id,(err,rows) => {

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

        Team.getAllTeams((err,rows) => {

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

router.get('/members/:id?',(req,res,next) => {

    if(req.params.id){

        Team.getTeamMembers(req.params.id,(err,rows) => {

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
        res.json('Team ID required');
    }
});

module.exports=router;