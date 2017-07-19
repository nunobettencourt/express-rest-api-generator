/**
 *
 * User Routes
 *
 */

const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

router.get('/:id?',(req,res,next) => {

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

// Local Strategy
passport.use(new LocalStrategy((username, password, done) => {

    User.getUserByUsername(username, (err, user) => {

        if(err) throw err;
        if(!user){
            return done(null, false, {message: 'No user found'});
        }

        User.comparePassword(password, user[0].password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                return done(null, user);
            } else {
                return done(null, false, {message: 'Wrong Password'});
            }
        });
    });
}));

passport.serializeUser((user, done) => {
    done(null, user[0].user_id);
});

passport.deserializeUser((id, done) => {
    User.getUserById(id, (err, user) => {
        done(err, user);
    });
});

// Login Processing
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect:'/',
        failureRedirect:'/login',
        failureFlash: true
    })(req, res, next);
});

module.exports = router;