const { Schema, Types } = require('mongoose');
const Thought = require('./thought');
const userSchema = new Schema(
    {
        username:{
            type: String,
            reqiuired: true,
            unique: true,
            max_length: 50,
        },
        email:{
            type: String,
            requied: true,
            unique: true,
            max_lenght: 50,
        },
        thought: [Thought],
        friends: [userSchema],
    },
    {
        toJSON: {
          getters: true,
        },
      }
)

const User = model('user', userSchema);

module.exports = User;