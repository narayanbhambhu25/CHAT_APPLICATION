const expressAsyncHandler = require("express-async-handler");
const Message = require("../models/messageModel");

const sendMessage = expressAsyncHandler(async (req, res) => {
  const { content, chatId } = req.body;
  if (!content || !chatId) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }
  var newMessage = {
    sender: req.user_id,
    content: content,
    chat: chatId,
  };

  try {
    var message = await Message.create(newMessage);
  } catch (error) {}
});

module.exports = { sendMessage };
