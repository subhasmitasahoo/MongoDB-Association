var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user")

User.create({
    email: "subha3@gmail.com",
    name: "Subha3"
});

Post.create({
    title: "Coding",
    content: "In my life"
},function(err, newPost){
    if(err){
        console.log("error: "+err);
    }
    else{
        User.findOne({name:"Subha3"},function(err,curUser){
          if(err){
              console.log("Eoor: "+err);
          }else{
              curUser.posts.push(newPost);
              curUser.save(function(err,data){
                  if(err){
                      console.log("Error: "+err);
                  }
                  else{
                      console.log("User after saving: "+data);
                  }
              })
          } 
        });
    }
});


User.findOne({name:"Subha3"}).populate("posts").exec(function(err,res){
  if(err){
      console.log("Error: "+err);
  } 
  else{
      console.log(res);
  }
});

