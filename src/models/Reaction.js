const { Schema, model } = require("mongoose");

const reactionsSchema = {
  reactionId: {
    type: Schema.Types.ObjectId,
    default: "",
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
  },
};

module.exports = reactionsSchema;
