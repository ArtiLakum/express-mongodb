const express = require("express");
const router = express.Router();
const {getContact,createContact,getallContact,updateContact, deleteContact} = require("../controlles/contactControllers")

router.route("/").get(getContact).post(createContact);
router.route("/:id").get(getallContact).put(updateContact).delete(deleteContact);

module.exports = router;
  