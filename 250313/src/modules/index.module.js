const express = require("express");
const boardRouter = require("./boards.module");
const usersRouter = require("./users.module");
const fruitRouter = require("./fruits.module");
const adminOnly = require("../middlewares/adminOnly.Middleware");
const logMiddleware = require("../middlewares/log.middleware");

const router = express.Router();

router.use("/users", adminOnly, logMiddleware, usersRouter);
router.use("/boards", boardRouter);
router.use("/fruits", logMiddleware, fruitRouter);

module.exports = router;
