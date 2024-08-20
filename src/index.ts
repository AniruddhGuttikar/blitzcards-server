import express from "express";
import cors from "cors";
import connectDB from "./config/db.config.js";

import routes from "./routes/routes.js";
const PORT = parseInt(process.env.PORT || "8000");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HELLO WORLDFm");
});

app.use("/api", routes);

connectDB();

app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});
