const express = require("express");
const router = express.Router();
const {
  registerUser,
  allUsers,
  authUser,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

// router.get("/", (req, res) => {
//   protect, allUsers;
// });

// router.post("/", (req, res) => {
//   registerUser;
// });

// // router.get("/", registerUser.registerUser);
// // router.post("/login", authUser.authUser);

// router.post("/login", (req, res) => {
//   authUser;
// });

router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);

module.exports = router;
