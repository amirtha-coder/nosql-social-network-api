const { User } = require("../models");

const createFriends = async (req, res) => {
  try {
    const { id, friendId } = req.body;
    if (id && friendId) {
      const data = await User.findOneAndUpdate(
        { _id: id },
        { $push: { friends: friendId } },
        { new: true }
      );
      console.log(data);
      return res.status(200).json({ success: true, data });
    }
  } catch (error) {
    return res.status(500).json(`Falied to create friend | ${error.message}`);
  }
};
const deleteFriends = async (req, res) => {
  try {
    console.log(req.params);
    const { userId, friendId } = req.params;

    const data = await User.findOneAndUpdate(
      { _id: userId },
      { $pull: { friends: friendId } },
      { new: true }
    );
    console.log(data);

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json(`Falied to delete friend | ${error.message}`);
  }
};

module.exports = {
  createFriends,
  deleteFriends,
};
