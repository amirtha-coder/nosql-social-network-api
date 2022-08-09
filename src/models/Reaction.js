const { Schema } = require("mongoose");

const moment = require("moment");

const schema = {
  reactionId: {
    type: Schema.Types.ObjectId,
    auto: true,
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
    get: (date) => moment(date),
  },
};

const reactionsSchema = new Schema(schema, {
  timestamps: true,
  reactionId: Number,
});

module.exports = reactionsSchema;
