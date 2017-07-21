const express = require('express');
const router = express.Router();
const Team = require('../models/teamModel');
const passport = require('passport');

router.get('/:id?', passport.authenticate('jwt', { session: false}), (req,res,next) => {

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

router.get('/members/:id?', passport.authenticate('jwt', { session: false}), (req,res,next) => {

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