// const db = require("../models");
// const Tutorial = db.SecondaryGuidance;
// const Op = db.Sequelize.Op;
//
// /// Retrieve all secondaryguidance from the database.
// exports.findAll = (req, res) => {
//
// };
// Retrieve all objects
//
// Retrieve all dat from the database:
//
// exports.findAll = (req, res) => {
//   Secondaryguidance.getAll((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving customers."
//       });
//     else res.send(data);
//   });
// };


const DutyType = require('../models/tutorial.model.js')
// Retrieve all dutytype from the database.
 exports.findAll = (req, res) => {
 //  Retrieve all data from the database:
 };
   exports.findAll = (req, res) => {
     DutyType.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
             err.message || "Some error occurred while retrieving duty."
         });
       else res.send(data);
     });
   };
