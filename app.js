import express from "express";
import { indexRouter } from "./routes/indexRouter.js";
import { newMessageRouter } from "./routes/newMessageRouter.js";

const app = express();
const PORT = 3000;

// register view engine :
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`listening on port ${PORT}`);
});
