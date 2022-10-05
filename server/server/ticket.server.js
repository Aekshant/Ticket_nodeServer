
const db = require("../../models/index")
const Ticket = db.tickets

exports.bookTicket = async ( body ) => {
    try {
        const data = await Ticket.create( body )
        return
    } catch (error) {
        throw( error )
    }
}

exports.getTicket = async ( userId ) => {
    try {
        const data = await Ticket.findAll( { where : { userId : userId }, raw : true } )
        return data
    } catch (error) {
        throw( error )
    }
}