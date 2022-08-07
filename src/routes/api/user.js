const { Router } = require("express");

const {
  getAllUsers,
  getAllUsersById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user");

const friend = require("./friend.js");
const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getAllUsersById);
router.post("/", createUser);
router.put(":id", updateUser);
router.delete("/:id", deleteUser);
router.use("/:userId", friend);

module.exports = router;
