import express from "express";
import { messageBoardRouter } from "./routes/messageBoardRoutes.js";

const app = express();
const PORT = 3000;

// register view engine :
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.use("/", messageBoardRouter);

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`listening on port ${PORT}`);
});
