const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is running fastly");
});

app.get("/api/chat", (req, res) => {
  res.status(200).json(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const { id } = req.params;
  const singleChat = chats.find((chat) => chat._id === id);

  if (singleChat) {
    res.status(200).json(singleChat);
  } else {
    res.status(404).json({ message: "Chat not found" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(`${PORT}`, console.log(`Server is running on port ${PORT}`));
