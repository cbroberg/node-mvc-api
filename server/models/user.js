import mongoose from 'mongoose';

const { Schema } = mongoose;

// mongoose.Promise = global.Promise; Inserted the bluebird module here to fix warnings described in app.js (now moved to alternative_db.js)
mongoose.Promise = require('bluebird');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: [5, 'Username must be 5 characters or more.'],
  },
  password: {
    type: String,
    required: true,
    minLength: [8, 'Password must be 8 characters or more!'],
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
});

// Write some code for encrypting password here ...

const User = mongoose.model('User', userSchema);

export default User;

console.log('Executing Server: user.js ...');
