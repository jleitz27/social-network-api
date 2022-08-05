const { Schema, model} = require('mongoose');
const moment = require('moment');
const { User } = require('.');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email:{
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email']
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
  },
  {
    toJSON:{
      virtuals: true,
      getters: true
    },
    id: false
  }
);

//use this to get total count of comments and replies
UserSchema.virtual('friendCount').get(function(){
  return this.friends.length;
});

//create model for user using the above schema
const User = model('User', UserSchema);

//export the model
module.exports = User;
