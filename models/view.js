const mongoose=require('mongoose');//destructuring syntax

const config = require('../config/database');

// View Schema
const ViewSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

const View = module.exports = mongoose.model('View', ViewSchema);


module.exports.addView = function(newView, callback){

      newView.save(callback);

  }

  module.exports.getViewByUsername = function(username, callback){
    const query = {username: username}
    View.findOne(query, callback);
  }
