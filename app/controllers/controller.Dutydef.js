

const DutyDef = require('../models/dutydef.model.js')
// Retrieve all dutytype from the database.
exports.findAll = (req, res) => {
//  Retrieve all data from the database:
};
  exports.findAll = (req, res) => {
    DutyDef.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving duty."
        });
      else res.send(data);
    });
  };