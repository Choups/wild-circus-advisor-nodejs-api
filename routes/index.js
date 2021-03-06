const express = require("express");

const user = require("./user");
const circus = require("./circus");
const event = require("./event");
const history = require("./history");
const reviews = require("./reviews");
const chat = require("./chat");

const router = express.Router();

router.use("/user", user);
router.use("/circus", circus);
router.use("/event", event);
router.use("/history", history);
router.use("/reviews", reviews);
router.use("/chat", chat);

module.exports = router;
