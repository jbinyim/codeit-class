const express = require("express");
const router = require("./modules/index.module");
const server = express();
const PORT = 3001;

server.use("/assets", express.static("src/public"));

// server.get("/", (req, res) => {
//   res.send("루트 경로에 오셨습니다.");
// });

// server.use((req, res, next) => {
//   if (req.url.includes("users")) {
//     return res.send("응 안보내줌");
//   }

//   console.log(`[${Date.now()}] ${req.ip} - ${req.method}:${req.url}`);
//   next();
// });

server.use(router);

server.use((err, req, res, next) => {
  console.log("에러 발생!", err.message);
  res.status(500).send("서버에서 에러가 발생했어요");
});

server.listen(PORT, () => {
  console.log(`서버가 ${PORT} 포트에서 잘 돌아가고 있습니다.`);
});
