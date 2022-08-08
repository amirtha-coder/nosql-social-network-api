const { User, Thought } = require("../models");

const getAllUsers = async (req, res) => {
  try {
    const data = await User.find({});

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all Users | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};
const getAllUsersById = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await User.findOne({ _id: id });
    // .populate({
    //   path: "thoughts",
    //   select: "-__v",
    // })
    // .populate({
    //   path: "friends",
    //   select: "-__v",
    // })
    // .select("-__v");

    if (!data) {
      return res.status(404).json({ success: false });
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ success: false });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const friends = [];
    const thoughts = [];

    const userExists = User.findOne({ where: email });

    if (userExists) {
      console.log(`User already exists with this email: ${email}`);
    }
    const user = await User.create(username, email, friends, thoughts);

    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to create user | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, friends, thoughts } = req.body;
    if (!username && !email && !friends && !thoughts) {
      return res.status(404).json({ success: false });
    }
    const data = await User.findByIdAndUpdate(id, {
      $set: { username, email, friends, thoughts },
    });
    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to update user | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userExists = await User.findByPk(id);

    // delete user
    if (userExists) {
      await User.destroy({
        where: {
          id,
        },
      });
      return res
        .status(200)
        .json({ success: true, message: "Successfully deleted user" });
    }
    return res.status(404).json({ error: "Failed to delete user" });
  } catch (error) {
    // catch error and return status 500
    console.log(`[ERROR]: Failed to delete user | ${error.message}`);
    return res.status(500).json({ error: "Failed to delete user" });
  }
};

module.exports = {
  getAllUsers,
  getAllUsersById,
  createUser,
  updateUser,
  deleteUser,
};
