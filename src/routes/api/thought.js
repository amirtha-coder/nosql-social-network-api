const { Router } = require("express");

const router = Router();
router.get(getAllThoughts, "/api/thoughts");
router.get(getAllThoughtsById, "/api/thoughts/:id");
router.post(createThought, "/api/thoughts");
router.put(updateThought, "/api/thought/:id");
router.delete(deleteThought, "/api/thought/:id");

router.post(createReactions, "/api/thoughts/:thoughtId/reactions/:reactionId");
router.delete(
  deleteReactions,
  "/api/thoughts/:thoughtId/reactions/:reactionId"
);

module.exports = router;
