// var mysql = require('mysql');
//
// var http = require('http');
//
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "newuser",
//   password: "imaginal",
//   database: "Fucitech"
// });
//
// //#####################################
// //Server on port 5002
// //#####################################
//
// var http =require("http");
// http.createServer(function (req, res) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   res.writeHead(200, {'Content-Type': 'text/html' })
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
//
// }).listen(5002); //the server object listens on port 8080
//
//
//
// con.connect(function(err, res) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("select * from `SecondaryGuidance`", function (err, result, feilds) {
//     if (err) throw err;
//     console.log(result);
//
//
//   });
// });


//#####################################
//Server on port 8080
//#####################################
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//db.sequelize.sync({ force: true }).then(() => {
//  console.log("Drop and re-sync db.");
//});

var corsOptions = {
  origin: "http://fucitechlegal.com"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// const db = require("../app/models/");
// db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Fucitech application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

require("./routes/secondaryguidance.routes.js")(app);
require("./routes/route.dutydef.js")(app);
require("./routes/sqlQuery.js")(app);
require("./routes/ProdStatutes.js")(app);
require("./routes/ProdRegulations.js")(app);
require("./routes/ProdConnections.js")(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});