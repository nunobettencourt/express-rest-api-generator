/**
 *
 * User Model
 *
 */

const db = require("../../dbConnection");
const bcrypt = require("bcryptjs");

const user = {
    getAllUsers:(callback) => {

        return db.query("Select * from user",callback);

    },

    getUserById:(id,callback) => {

        return db.query("select * from user where user_id=?",[id],callback);
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

module.exports = user;