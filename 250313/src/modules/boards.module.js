const express = require("express");

const boardRouter = express.Router();

boardRouter.get("/", (req, res) => {
  res.send("게시판 경로에 오셨습니다.");
});

boardRouter.get("/:boardId", (req, res) => {
  const boardId = req.params.boardId;
  res.send(`${boardId} 경로에 오셨습니다.`);
});

module.exports = boardRouter;
