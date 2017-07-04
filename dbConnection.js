var mySQL = require("mysql");

var connection = mySQL.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'screening_mgnt'
});

module.exports=connection;