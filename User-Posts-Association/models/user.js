var mongoose = require("mongoose");
//USER - email, name
var userSchema = mongoose.Schema({
   email: String,
   name: String,
   posts: [{type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
   }]
});

var User = mongoose.model("User",userSchema);

//What we want to export
module.exports = User;