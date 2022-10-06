
const db = require('../../models/index')
const User = db.user
const { genSaltSync, hashSync, compareSync } = require('bcryptjs');
const { sign } = require("jsonwebtoken")
const ticketService = require("./ticket.server")


exports.signupUser = async ( body ) => {
    try {
        const data = await User.findOne( { where : { email : body.email }, raw : true } )
        console.log( data );
        if ( data ) return ( "Your Email Address is Already registered" )
        
        const salt = genSaltSync( 10 );
        body.password = hashSync( body.password, salt );
        await User.create( body )

        return ( "Registered Successfully, Please Login" )
    } catch ( error ) {
        throw ( error )
    }
}

exports.signinUser = async ( body ) => {
    try {
        const data = await User.findOne( { where : { email : body.email }, attributes : [ "id", "password" ] , raw : true } )
        if ( !data ) return ( { data : null, message : "Your are not registered"} )
    
        const checkPassword = compareSync( body.password, data.password );
        if( !checkPassword ) return ( { data : null, message : "Wrong Password"  } )

        data.token = sign( { userId : data.id }, process.env.JWT_SECRET );
        delete data[ "password" ]
        return ( { data : data, message : true } )
    } catch ( error ) {
        throw ( error )
    }
}


exports.getOneUser = async ( userId ) => {
    try {
        const data = await User.findOne( { where : { id : userId }, raw : true } )
        if ( !data ) return ( { message : "Your are not registered", data : null } )

        delete data[ "password" ]
        data.tickets = await ticketService.getTicket ( data.id )
        return ( { message : true, data : data } )
    } catch ( error ) {
        throw ( error )
    }
}