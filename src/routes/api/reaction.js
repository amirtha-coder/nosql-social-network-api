const { Router } = require("express");
const {
  createReactions,
  deleteReactions,
} = require("../../controllers/reaction");

const router = Router({ mergeParams: true });

router.post("/reactions", createReactions);
router.delete("/reactions/:reactionId", deleteReactions);

module.exports = router;
