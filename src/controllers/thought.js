const { Thought, thought } = require("../models");

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
    const { thoughtText, email, thoughtname, thoughtId } = req.body;
    const reactions = [];

    if (thoughtText && email && thoughtname) {
      const newThought = await Thought.create({
        thoughtText,
        email,
        thoughtname,
        reactions,
      });
      const { _id: thoughtId } = newThought;

      const data = await thought.findByIdAndUpdate(thoughtId, {
        $set: { thoughts: thoughtId },
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
    const { thoughtText, createdAt, email, thoughtname } = req.body;
    if (!thoughtText && !createdAt && !email && !thoughtname) {
      return res.status(404).json({ success: false });
    }
    const data = await Thought.findByIdAndUpdate(id, {
      $set: { thoughtText, createdAt, email, thoughtname },
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
    const thoughtExists = await Thought.findById(id);

    // delete thought
    if (thoughtExists) {
      await thought.deleteMany({ id: id });
      return res
        .status(200)
        .json({ success: true, message: "Successfully deleted thought" });
    }
    return res.status(404).json({ error: "Failed to delete thought" });
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
