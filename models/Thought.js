const { Schema, model } = require('mongoose')

const thoughtSchema = new Schema({
   thoughtText: {
      type: String,
      required: true,
      maxLength: [280, 'must be between 1 and 280 characters'],
      minLength: [1, 'must be between 1 and 280 characters'],
   },
   createdAt: { type: Date, default: Date.now },
   username: {
      type: String,
      required: true,
   },
   reactions: [],
})