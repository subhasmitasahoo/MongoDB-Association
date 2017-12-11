var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST - title,conetent
var postSchema = mongoose.Schema({
   title: String,
   content: String
});

var Post = mongoose.model("Post",postSchema);
//USER - email, name
var userSchema = mongoose.Schema({
   email: String,
   name: String,
   posts: [postSchema]
});

var User = mongoose.model("User",userSchema);

// var newPost = new Post({
//   title: "Coding",
//   content: "Must do everyDay"
// });

// newPost.save(function(err,res){
//   if(err){
//       console.log("Error: "+err);
//   }
//   else{
//       console.log("Saved: "+res.title);
//   }
// });

// var newUser = new User({
//   email: "subha2@gmail.com",
//   name: "Subhasmita2",
//   posts: newPost
// });

// var newUser = new User({
//   email: "subha2@gmail.com",
//   name: "Subhasmita2",
//   posts: [{
//       title: "Learning",
//     content: "Something useful everyday"
//   },
//   {
//       title: "Excercise",
//   content: "Catalyst for brain amd body"
//   }]
// });

User.findOne({name:"Subhasmita2"},function(err,userOne){
    if(err){
        console.log("Error: "+err);
    }
    else{
        console.log("res: "+userOne);
        console.log("res name: "+userOne.name);
        console.log("res posts: "+userOne.posts);
        userOne.posts.push({
       title: "Learning",
     content: "Something useful everyday"
  });
  userOne.save(function(err,upUser){
    if(err){
        console.log("Error: "+err);
    }
    else{
        console.log('Saved: '+upUser);
    }
});
    }
});

// newUser.save(function(err,res){
//     if(err){
//         console.log("Error: "+err);
//     }
//     else{
//         console.log('Saved: '+res);
//     }
// });
