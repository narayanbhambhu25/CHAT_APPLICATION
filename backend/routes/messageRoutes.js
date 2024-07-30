const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  sendMessage,
  allMesaages,
} = require("../controllers/messagecontrollers");

const router = express.Router();

router.route("/").post(protect, sendMessage);
router.route("/:chatId").get(protect, allMesaages);

module.exports = router;
