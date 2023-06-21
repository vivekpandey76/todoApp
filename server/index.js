import express from "express";
import Connection from "./database/db.js";
import cors from "cors";
import bodyParser from "body-parser";
import Routes from "./routes/route.js";
const app = express();

const PORT = 8000;
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);
Connection();
app.listen(PORT, (req, res) => {
  console.log(`Server is listening on ${PORT}`);
});
