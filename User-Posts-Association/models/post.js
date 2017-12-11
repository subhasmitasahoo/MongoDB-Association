var mongoose = require("mongoose");
//POST - title,conetent
var postSchema = mongoose.Schema({
   title: String,
   content: String
});

var Post = mongoose.model("Post",postSchema);

module.exports = Post;