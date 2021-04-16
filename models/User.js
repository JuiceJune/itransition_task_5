const {Schema, model} = require('mongoose')

const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  username: { type: String, required: true},
  registered: { type: Date, required: true},
  lastLogin: { type: Date, default: null},
  status: { type: String, default: 'active'}
})

module.exports = model('User', schema)
