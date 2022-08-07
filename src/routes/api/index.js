const { Router } = require("express");

const user = require("./user");
const thought = require("./thought");

const router = Router();

router.use("/users", user);
router.use("/thoughts", thought);

module.exports = router;
