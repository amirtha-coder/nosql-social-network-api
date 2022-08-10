const { Thought } = require("../models");

const createReactions = async (req, res) => {
  try {
    const { reactionBody, username, thoughtId } = req.body;

    const reaction = { reactionBody, username };

    console.log(reaction);

    if (thoughtId) {
      const data = await Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $addToSet: { reactions: reaction } },
        { new: true }
      );
      console.log(data);
      return res.status(200).json({ success: true, data });
    }
  } catch (error) {
    return res.status(500).json(`Falied to create reaction | ${error.message}`);
  }
};
const deleteReactions = async (req, res) => {
  try {
    console.log(req.params);
    const { thoughtId, reactionId } = req.params;

    const data = await Thought.findOneAndUpdate(
      { _id: thoughtId },
      { $pull: { reactions: { _id: reactionId } } },
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
