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
    //this.set
    return bcrypt.genSaltAsync(10).then(function(salt) {
      return bcrypt.hashAsync(data.password, result, null)
    });
  },
  comparePassword: function(pw) {
    // this.get
    bcrypt.compare(pw, hash, function(err, res) {
      if(res) {
         //login
      } else {
         //redirect
      }
    });
  }
});

// //table name - put users into
// User.prototype.insertUser = function(user) {
//   if (!util.checkUser(user)) {
//     console.log('inside insertuser');
//     // db.knex('users').insert({username: this.username, password: this.hashedPassword});
//   } else {
//     //redirect
//   }
// };

module.exports = User;