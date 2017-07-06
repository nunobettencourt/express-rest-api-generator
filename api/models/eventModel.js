/**
 *
 * Event Model
 *
 */

var db = require("../../dbConnection");

var event = {
    getAllEvents:function(callback){

        return db.query("Select * from event",callback);

    },

    getEventById:function(id,callback){

        return db.query("select * from event where event_id=?",[id],callback);
    }
};

module.exports = event;