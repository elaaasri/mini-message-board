import express from "express";
import { messageBoardRouter } from "./routes/messageBoardRoutes.js";

const app = express();
const PORT = 3000;

// register view engine :a
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", messageBoardRouter);

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`listening on port ${PORT}`);
});
