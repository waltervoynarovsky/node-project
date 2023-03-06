import express from "express";
import router from "./routes/todos.js";
import bodyParser from "body-parser";
import { sequelize } from "./db/index.js";

const app = express();
const port = process.env.PORT || 3000;

try {
  const result = await sequelize.sync();
  console.log(result);
} catch (error) {
  console.log(error);
}

app.use(bodyParser.json());
app.use("/tasks", router);

app.get("/", (req, res) => {
  res.send("To Do list");
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
