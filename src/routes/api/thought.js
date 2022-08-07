const { Router } = require("express");

const {
  getAllThoughts,
  getAllThoughtsById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thought");

const reaction = require("./reaction.js");

const router = Router({ mergeParams: true });

router.get("/", getAllThoughts);
router.get("/:id", getAllThoughtsById);
router.post("/", createThought);
router.put("/:id", updateThought);
router.delete("/:id", deleteThought);
router.use("/:thoughtId", reaction);

module.exports = router;
