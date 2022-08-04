const { Schema, model } = require("mongoose");
const reactionsSchema = require("./Reaction");

const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
    trim: true,
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

const schema = new Schema(thoughtSchema);
