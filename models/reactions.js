const { Schema, Types } = require('mongoose');
const User = require('./user')
const Thought = require('./thought');

const reactionSchema = new Schema(
    {
        reactionid: {
            type: Object,
            default: 0,
        },
        reactionBody:{
            type: String,
            required: true,
            max_length: 280
        },
        userName:{
            type: String,
            required: true,
        },
        createdAt:{
            type: Date,
            default: Date.now,

        }
        
    },
    {
        toJSON: {
          getters: true,
        },
      }
)