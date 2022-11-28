const express = require("express");
const dotenv = require("dotenv");
var cors = require("cors");
const { connectdb } = require("./models/connection.js");
const router = require("./routes/UserRoutes");
const app = express();
app.use(cors());
dotenv.config();
connectdb(process.env.DATABASE_URL);
app.use(express.json());
app.use("/api", router);
app.listen(process.env.PORT, () => {
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});
