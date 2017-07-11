/**
 *
 * Event Model
 *
 */

var db = require("../../dbConnection");

var Event = {
    getAllEvents:(callback) => {

        return db.query("Select * from event",callback);

    },

    getEventById:(id,callback) => {

        return db.query("select * from event where event_id=?",[id],callback);
    },

    addEvent:(Event,callback) => {

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

    deleteEvent:(id,callback) => {
        return db.query("delete from event where event_id=?",[id],callback);
    },

    updateEvent:(id,Event,callback) => {
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