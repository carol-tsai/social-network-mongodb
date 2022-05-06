const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema({
   reactionId: {
      type: Schema.Types.ObjectId,
      default: new Types.ObjectId(),
   },
   reactionBody: {
      type: String,
      required: true,
      maxLength: [280, "must be 280 characters or less"],
   },
   username: {
      type: String,
      required: true,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   }
},
)


module.exports = reactionSchema;