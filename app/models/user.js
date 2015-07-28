var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var util = require('../../lib/utility.js')

var User = db.Model.extend({
  initialize: function() {
    this.on('creating', this.hashPassword);
    // this.password = this.hashPassword(password);
  },
  tableName: 'users'
}, {
  hashPassword: function(password){
    console.log('inside hash password');
    bcrypt.hash(password, null, null, function() {
      //whats here???
    });
  },
  comparePassword: function(pw) {
    bcrypt.compare(pw, hash, function(err, res) {
      if(res) {
         //this.get password and compare
      } else {
         //redirect to login
      }
    });
  }
});



module.exports = User;