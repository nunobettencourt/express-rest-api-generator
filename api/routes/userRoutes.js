/**
 *
 * User Routes
 *
 */

const express = require('express');
const router = express.Router();
const user = require('../models/userModel');

router.get('/:id?',(req,res,next) => {

    if(req.params.id){

        user.getUserById(req.params.id,(err,rows) => {

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

        user.getAllUsers((err,rows) => {

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

router.post('/register', (req, res, next) => {
   let username = req.body.name;
   let email = req.body.email;
   let password = req.body.password;
   let confirmPassword = req.body.confirmPassword;

   req.checkBody('username', 'Username field is required').notEmpty();
   req.checkBody('email', 'Email field is required').notEmpty();
   req.checkBody('email', 'Email must be a valid email address').isEmail();
   req.checkBody('password', 'Password field is required').notEmpty();
   req.checkBody('confirmPassword', 'Passwords do not match').equals(req.body.password);

   let errors = req.validationErrors(); //TODO replace with req.getValidationResult()

   if(errors){
       res.json(errors)
   } else {
       user.addUser(req.body,function(err,count){
           if(err)
           {
               res.json(err);
           }
           else{
               res.json(req.body);
           }
       });
   }
});

module.exports=router;