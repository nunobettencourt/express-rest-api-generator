/**
 *
 * User Model
 *
 */

const db = require("../../dbConnection");
const bcrypt = require("bcryptjs");

const User = {
    getAllUsers:(callback) => {

        return db.query("Select * from user",callback);

    },

    getUserById:(id,callback) => {

        return db.query("select * from user where user_id=?",[id],callback);
    },

    getUserByUsername: (username, callback) => {

        return db.query("select * from user where username=?", [username], callback);
    },

    comparePassword: (candidatePassword, hash, callback) => {
        bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
            if(err) {
                console.log(err)
            } else {
                callback(null, isMatch)
            }
        });
    },

    addUser: (user,callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                if(err) {
                    console.log(err);
                }
                user.password = hash;
                return db.query(
                    "INSERT INTO user(username, email, password) VALUES (?,?,?)",
                    [
                        user.username,
                        user.email,
                        user.password
                    ],
                    callback
                );
            })
        } );

    }
};

module.exports = User;