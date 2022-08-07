const { Router } = require("express");
const { createFriends, deleteFriends } = require("../../controllers/friend");

const router = Router({ mergeParams: true });

router.post("/friends/:friendId", createFriends);
router.delete("/friends/:friendId", deleteFriends);

module.exports = router;
