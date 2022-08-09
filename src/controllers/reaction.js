const { Thought } = require("../models");

const createReactions = async (req, res) => {
  try {
    const { id, reactionId } = req.body;
    if (id && reactionId) {
      const data = await Thought.findOneAndUpdate(
        { _id: id },
        { $push: { reactions: reactionId } },
        { new: true }
      );
      console.log(data);
      return res.status(200).json({ success: true, data });
    }
  } catch (error) {
    return res.status(500).json(`Falied to create friend | ${error.message}`);
  }
};
const deleteReactions = async (req, res) => {
  try {
    console.log(req.params);
    const { userId, reactionId } = req.params;

    const data = await User.findOneAndUpdate(
      { _id: userId },
      { $pull: { friends: reactionId } },
      { new: true }
    );
    console.log(data);

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res
      .status(500)
      .json(`Falied to delete reactions | ${error.message}`);
  }
};

module.exports = { createReactions, deleteReactions };
