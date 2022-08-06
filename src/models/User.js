const { Schema, model } = require("mongoose");

const userSchama = {
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    userSchama.virtual("friendCount"),
  ],
};

const schema = new Schema(userSchama, {
  toJSON: {
    virtuals: true,
  },
  id: false,
});

schema.virtual("friendCount").get(function () {
  return `${this.friends.length}`;
});

const User = model("User", schema);

module.exports = User;
