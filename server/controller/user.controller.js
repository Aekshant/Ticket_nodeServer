
const userServices = require( "../server/user.server" )

exports.signupUser = async ( req, res ) => {
    try {
        const body = req.body
        const data = await userServices.signupUser( body )
        res.send({
            status : true,
            message: data
        })
    } catch (error) {
        throw ( error )
    }
}

exports.signinUser = async ( req, res ) => {
    try {
        const body = req.body
        const { data, message } = await userServices.signinUser ( body )
        res.send({
            status : true,
            message: message,
            data : data
        })
    } catch (error) {
        throw ( error )
    }
}

exports.getOneUser = async ( req, res ) => {
    try {
        const userId = req.user
        const { message, data } = await userServices.getOneUser( userId )
        res.send({
            status : true,
            message: message,
            data : data
        })
    } catch (error) {
        throw ( error )
    }
}