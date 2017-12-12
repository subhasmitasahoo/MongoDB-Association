var mongoose = require("mongoose");
var courseSchema = mongoose.Schema({
    id: String,
   name: String,
   duration: Number,
   students: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Student"
   }]
});

var Course = mongoose.model("Course",courseSchema);
module.exports = Course;