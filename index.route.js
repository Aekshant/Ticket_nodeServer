const express = require("express")
const router = express.Router();

const user = require("./server/routes/user.route")
const ticket = require("./server/routes/ticket.route")

router.use( "/user", user )
router.use( "/ticket", ticket )

module.exports = router;