const express = require("express");
const taskRouter = require("./routers/task");

const app = express();

app.use(express.json());
app.use(taskRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server is listening on port " + port);
});