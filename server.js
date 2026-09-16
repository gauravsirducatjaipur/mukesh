require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 1300;
const app = express();
const connectDB = require("./config/dbConfig");
connectDB();




app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/authRoutes"));

app.get("/", (req, res) => {
  console.log("Home page request get from client");
  res.send("<h1>Welcome to the E-commerce API</h1>");
})

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
