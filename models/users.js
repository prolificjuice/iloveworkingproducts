// Setup trips schema for storing weather details
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema(
    {
      "googleId": String,
      "username": String
    }
);
const Users = mongoose.model('user', userSchema);

module.exports = Users;
