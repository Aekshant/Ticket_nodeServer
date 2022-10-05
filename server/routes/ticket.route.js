
const router = require("express").Router()

const ticketCOntroller = require('../controller/ticket.controller')
const { checkToken } = require("../middleware/jwt.token")

router.post("/", checkToken, ticketCOntroller.bookTicket)

module.exports = router