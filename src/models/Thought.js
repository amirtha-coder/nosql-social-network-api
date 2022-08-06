const { Schema, model } = require("mongoose");
const moment = require("moment");
const reactionsSchema = require("./Reaction");

const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (date) => moment(date),
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
  },

  reactions: reactionsSchema,
};

const schema = new Schema(thoughtSchema, {
  toJSON: {
    virtuals: true,
  },
  id: false,
  timestamps: true,
});

schema.virtual("reactionCount").get(function () {
  return `${this.reactions.length}`;
});

const Thought = model("Thought", schema);

module.exports = Thought;
