const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to exxept js0n data

app.get("/", (req, res) => {
  res.send("API is running fastly");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(`${PORT}`, console.log(`Server is running on port ${PORT}`));
