import { Singleton } from "../singleton";

function init(){
  if(Singleton.db == undefined){

  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: ""
});
  
  con.connect(function (err:any) {
      if (err) throw err;
      console.log("Connected!");
  });
  Singleton.db = con;
  return con;
}
else return Singleton.db;
}

export default init;