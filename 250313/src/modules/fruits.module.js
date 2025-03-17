const express = require("express");

const fruitRouter = express.Router();

fruitRouter.get("/", (req, res) => {
  res.send("과일 목록에 오셨습니다");
});

fruitRouter.get("/:fruitId", (req, res) => {
  const fruitId = req.params.fruitId;
  res.send(`${fruitId} 경로에 오셨습니다`);
});

module.exports = fruitRouter;
