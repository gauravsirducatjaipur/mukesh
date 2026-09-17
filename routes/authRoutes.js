const express = require("express");
const router = express.Router();

const { signupController, loginController, profileController } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

router.post("/signup", signupController)
router.post("/login", loginController)
router.get("/profile", protect, profileController);





module.exports = router;