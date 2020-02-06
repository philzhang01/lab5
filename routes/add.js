var data = require("../data.json");

exports.addFriend = function(request, response) {
  // Your code goes here
  var name = request.query.name;
  var desc = request.query.description;
  var newFriend = {
    name: name,
    description: desc,
    imageURL: "http://lorempixel.com/400/400/people/"
  };
  data.friends.push(newFriend);
};
