var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var util = require('../../lib/utility.js')

var User = db.Model.extend({
  initialize: function(username, password) {
    this.username = username;
    // this.password = this.hashPassword(password);
  }

});

User.prototype.hashPassword = function(password){
  bcrypt.genSalt(10, function(err, salt) {
   bcrypt.hash(password, salt, function(err, hash) {
     //add to database

   });
  });
 };

User.prototype.comparePassword = function(pw) {
  bcrypt.compare(pw, hash, function(err, res) {
    if(res) {
       //login
    } else {
       //redirect
    }
  });
};

//table name - put users into
User.prototype.insertUser = function(user) {
  if (!util.checkUser(user)) {
    console.log('inside insertuser');
    db.knex('users').insert({username: this.username, password: this.hashedPassword});
  } else {
    //redirect
  }
};

module.exports = User;