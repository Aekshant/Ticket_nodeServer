
const ticketservice = require("../server/ticket.server")

exports.bookTicket = async ( req, res ) => {
    try {
        const body = req.body
        body.userId = req.user
        
        const data = await ticketservice.bookTicket ( body )
        res.send({
            status : true,
            message: "Ticket booked"
        })
    } catch (error) {
        throw( error )
    }
}
