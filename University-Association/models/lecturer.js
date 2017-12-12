var mongoose = require("mongoose");

var lecturerSchema = mongoose.Schema({
   name:  String,
   id: String,
   coursesHandled:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Course"
   }],
   phone: String
});

var Lecturer = mongoose.model("Lecturer",lecturerSchema);
module.exports = Lecturer;