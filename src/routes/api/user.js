const { Router } = require("express");

const {
  getAllUsers,
  getAllUsersById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user");

const { createFriends, deleteFriends } = require("../../controllers/friend");
const router = Router();

router.get(getAllUsers, "/api/users");
router.get(getAllUsersById, "/api/users/:id");
router.post(createUser, "/api/users");
router.put(updateUser, "/api/user/:id");
router.delete(deleteUser, "/api/user/:id");

router.post(createFriends, "/api/users/:userId/friends/:friendId");
router.delete(deleteFriends, "/api/users/:userId/friends/:friendId");

module.exports = router;
