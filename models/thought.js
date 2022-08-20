const { Schema, Types } = require('mongoose');
const User = require('./user')
const Reactions = require ('./reactions.js')
const thoguhtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            reqiuired: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt:{
            type: Date,
            default: Date.now,
        },
        username: [User],
        reactions: [Reactions],

    },
    {
        toJSON: {
          getters: true,
        },
      }
)


const Thought = model ('thought', thoguhtSchema);
module.exports= Thought;
