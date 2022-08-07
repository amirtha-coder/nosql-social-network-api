const { Router } = require("express");
const {
  createReactions,
  deleteReactions,
} = require("../../controllers/reaction");

const router = Router();

router.post("/reactions/:reactionId", createReactions);
router.delete("/reactions/:reactionId", deleteReactions);

module.exports = router;
