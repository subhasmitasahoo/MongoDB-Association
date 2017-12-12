var mongoose = require("mongoose");
var Course = require("./models/course");
var Department = require("./models/department");
var Lecturer = require("./models/lecturer");
var Student = require("./models/student");

mongoose.connect("mongodb://localhost/university_demo");

Department.create({
    name: "Computer Engineering",
    location: "NITK, Surathkal"
});

Lecturer.create({
   name: "Shanthi Thilagam",
   id: "123SH",
},function(err,curLecturer){
    if(err){
        console.log("Error: "+err);
    }else{
        Department.findOne({name:"Computer Engineering"},function(err,dept){
            if(err){
                console.log("Error: "+err);
            }else{
                dept.lecturers.push(curLecturer);
            }
        });
    }
});

Course.create({
    name: "Database Management Systems",
    id: "CO501",
    duration: 180
},function(err,curCourse){
   if(err){
       console.log("Error: "+err);
   } else{
       Lecturer.findOne({name:"Shanthi Thilagam"},function(err, curLecturer){
           if(err){
               console.log("Error: "+err);
           }else{
               curLecturer.coursesHandled.push(curCourse);
               curLecturer.save(function(err,data){
                   if(err){
                       console.log("Error: "+err);
                   }else{
                       console.log(data);
                   }
               })
           }
       });
       
       Department.findOne({name:"Computer Engineering"},function(err,curDept){
          if(err){
              console.log("Error: "+err);
          }else{
              curDept.courses.push(curCourse);
              curDept.save(function(err,data){
                 if(err){
                     console.log("Error: "+err);
                 }else{
                     console.log("Data");
                 } 
              });
          } 
       });
   }
});

Student.create({
    name: "Subhasmita Sahoo",
    id: "13CO247",
},function(err,curStudent){
    if(err){
        console.log("Error: "+err);
    }else{
        Course.findOne({id: "CO501"},function(err,curCourse){
            if(err){
                console.log("Error: "+err);
            }else{
                curCourse.students.push(curStudent);
                curStudent.coursesTaken.push(curCourse);
                curCourse.save(function(err,data){
                   if(err){
                       console.log("Error: "+err);
                   } else{
                       console.log(data);
                   }
                });
                curStudent.save(function(err,data){
                    if(err){
                        console.log("Error: "+err);
                    }else{
                        console.log(data);
                    }
                })
            }
        })
    }
})