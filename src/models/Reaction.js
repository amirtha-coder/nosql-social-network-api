const { Schema, model } = require("mongoose");

const schema = {
  reactionId: {
    type: Schema.Types.ObjectId,
    default: new Schema.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: moment(d).format("MMMM d, YYYY"),
  },
};

const reactionsSchema = new Schema(schema);

module.exports = reactionsSchema;
