const express = require("express");

const usersRouter = express.Router();

usersRouter.get("/", (req, res, next) => {
  try {
    res.send("유저 목록에 오셨습니다.");
  } catch (e) {
    next(e);
  }
});

usersRouter.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  res.send(`${userId} 목록에 오셨습니다.`);
});

module.exports = usersRouter;
