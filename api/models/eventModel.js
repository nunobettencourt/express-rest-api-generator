/**
 *
 * Event Model
 *
 */

var db = require("../../dbConnection");

var Event = {
    getAllEvents:function(callback){

        return db.query("Select * from event",callback);

    },

    getEventById:function(id,callback){

        return db.query("select * from event where event_id=?",[id],callback);
    },

    addEvent:function(Event,callback){

        return db.query(
            "INSERT INTO event(event_type_id, date, status) VALUES (?,?,?)",
            [
                Event.event_type_id,
                Event.date,
                Event.status
            ],
            callback
        );
    },

    deleteEvent:function(id,callback){
        return db.query("delete from event where event_id=?",[id],callback);
    },

    updateEvent:function(id,Event,callback){
        return  db.query("update event set event_type_id=?,status=?,date=? where event_id=?",
            [
                Event.event_type_id,
                Event.date,
                Event.status,
                id
            ],callback);
    }
};

module.exports = Event;