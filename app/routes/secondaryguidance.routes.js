


module.exports = app => {
  

  const DutyType = require("../controllers/controller.js");

  // Retrieve all
  app.get("/DutyType", DutyType.findAll);
};
