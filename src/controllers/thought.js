const { Thought } = require("../models");

const getAllThoughts = async (req, res) => {
  try {
    const data = await Thought.find({});

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all thoughts | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};
const getAllThoughtsById = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Thought.findOne({ _id: id });

    if (!data) {
      return res.status(404).json({ success: false });
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ success: false });
  }
};
const createThought = async (req, res) => {
  try {
    console.log(req.body);
    const { thoughtText, email, username } = req.body;
    const reactions = [];

    if (thoughtText && email && username) {
      const newThought = await Thought.create({
        thoughtText,
        email,
        username,
        reactions,
      });

      return res.json({ success: true });
    } else {
      res.status(404).json({ success: false });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({ success: false });
  }
};
const updateThought = async (req, res) => {
  try {
    const { id } = req.params;
    const { thoughtText, createdAt, email, username } = req.body;
    if (!thoughtText && !createdAt && !email && !username) {
      return res.status(404).json({ success: false });
    }
    const data = await Thought.findByIdAndUpdate(id, {
      $set: { thoughtText, createdAt, email, username },
    });
    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to update thought | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};
const deleteThought = async (req, res) => {
  try {
    const { id } = req.params;

    // delete thought
    await Thought.findByIdAndDelete({ _id: id });
    return res
      .status(200)
      .json({ success: true, message: "Successfully deleted thought" });
  } catch (error) {
    // catch error and return status 500
    console.log(`[ERROR]: Failed to delete thought | ${error.message}`);
    return res.status(500).json({ error: "Failed to delete thought" });
  }
};

module.exports = {
  getAllThoughts,
  getAllThoughtsById,
  createThought,
  updateThought,
  deleteThought,
};
