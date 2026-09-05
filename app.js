import express from "express";
// import { indexRouter } from "./routes/indexRouter.js";
// import { newMessageRouter } from "./routes/newMessageRouter.js";
import { messageRoutes } from "./routes/messageRoutes.js";

const app = express();
const PORT = 3000;

// register view engine :a
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// app.use("/", indexRouter);
// app.use("/new", newMessageRouter);
app.use("/", messageRoutes);

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`listening on port ${PORT}`);
});
