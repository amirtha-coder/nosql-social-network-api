const { Schema, model } = require("mongoose");
const mongoose = require("../config/connection");

const moment = require("moment");

const schema = {
  reactionId: {
    type: Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId(),
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
    get: (date) => date && moment(date).unix(),
  },
};

const reactionsSchema = new Schema(schema, {
  timestamps: true,
  reactionId: Number,
});

module.exports = reactionsSchema;
