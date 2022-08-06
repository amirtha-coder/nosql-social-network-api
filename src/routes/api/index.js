const { Router } = require("express");

const user = require("./user");
const thought = require("./thought");

const router = Router();

router.use("/user", user);
router.use("/thought", thought);

module.exports = router;
