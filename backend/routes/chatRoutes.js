const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  removeFromGroup,
  addToGroup,
  renameGroup,
} = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, accessChat); //accesing or creating chat, only logged in user can access
router.route("/").get(protect, fetchChats); //fetch all chats from database for that user
router.route("/group").post(protect, createGroupChat); //creation of group
router.route("/rename").put(protect, renameGroup); //rename a group
router.route("/groupremove").put(protect, removeFromGroup); //remove or leave group
router.route("/groupadd").put(protect, addToGroup); //add someone to group

module.exports = router;
