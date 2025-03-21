const express = require("express");
const router = require("./modules/index.module");
const errorHandler = require("./middlewares/errorHandler.middleware");
const authentication = require("./middlewares/authentication.middleware");
const cors = require("cors");

const app = express();
const PORT = 5555;

app.use(cors());
app.use(authentication);
app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started to listen at ${PORT}`);
});
