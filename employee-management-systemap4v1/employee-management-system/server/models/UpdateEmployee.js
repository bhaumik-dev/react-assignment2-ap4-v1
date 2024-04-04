const mongoose = require("mongoose");

const updateEmployeeSchema = new mongoose.Schema({
  title: String,
  department: String,
  currentStatus: { type: Boolean, default: true },
});

const UpdateEmployee = mongoose.model("UpdateEmployee", updateEmployeeSchema);

module.exports = UpdateEmployee;
