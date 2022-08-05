const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

//create reaction schema, thought schema can use it then
const ReactionSchema = new Schema({
   // set custom id to avoid confusion with parent comment _id
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
      type: String,
      required: true
  }, 
  createdAt: {
      type: Date, 
      default: Date.now,
      get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
  },
  },
  {
  toJSON: {
      getters: true
  }
})

//create thought schema
const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
    minlength: 1
},
createdAt: {
    type: Date, 
    default: Date.now,
    get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
},
username: {
    type: String,
    required: true,
},
reactions: [ReactionSchema]
},
{
toJSON: {
    virtuals: true,
    getters: true
},
id: false   
});

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

//create model for user using the above schema
const Thought = model('Thought', ThoughtSchema);

//export the model
module.exports = Thought;