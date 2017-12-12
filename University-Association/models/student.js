var mongoose = require("mongoose");

var studentSchema = mongoose.Schema({
   name: String,
   id: String,
   coursesTaken:[{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Course"
   }],
   phone: String
});

var Student = mongoose.model("Student",studentSchema);
module.exports = Student;