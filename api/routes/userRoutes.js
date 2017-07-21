/**
 *
 * User Routes
 *
 */

const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const passport = require('passport');


router.get('/:id?', passport.authenticate('jwt', { session: false}), (req,res,next) => {

    if(req.params.id){

        User.getUserById(req.params.id,(err,rows) => {

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

        User.getAllUsers((err,rows) => {

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
       User.addUser(req.body,(err) => {
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

// route to authenticate a user (POST http://localhost:3000/user/login)
router.post('/login', function(req, res) {

    let username = req.body.username;
    let password = req.body.password;

    User.getUserByUsername(username, (err, user) => {

        if(err) throw err;
        if(!user){
            res.send({success: false, msg: 'Authentication failed. User not found.'});
        } else {

            User.comparePassword(req.body.password, user[0].password, (err, isMatch) => {
                if(err) throw err;
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    let token = jwt.encode(user, config.jwtSecret);
                    // return the information including token as JSON
                    res.json({success: true, token: 'JWT ' + token});
                } else {
                    res.send({success: false, msg: 'Authentication failed. Wrong password.'});
                }
            });

        }
    });

});


module.exports = router;