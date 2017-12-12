var mongoose = require("mongoose");

var departmentSchema = mongoose.Schema({
   name: String,
   courses: [{type:mongoose.Schema.Types.ObjectId,
       ref:"Course"
   }],
   lecturers:[{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Lecturer"
   }],
   location: String
});

var Department = mongoose.model("Department",departmentSchema);
module.exports = Department;