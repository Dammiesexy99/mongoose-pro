const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  first_name:String,
  last_name: String,
  age:{
    valueType:Number
  },
  gender: String
})

module.exports = mongoose.model('Person', personSchema);
