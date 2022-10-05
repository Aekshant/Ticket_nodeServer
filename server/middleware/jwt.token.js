
const jwt = require("jsonwebtoken");

module.exports = {
    checkToken: async( req, res, next ) => {
      try {
        let token = req.get("authorization");
        if( !token ){
            return res.json({
                status:false,
                message: "Provide a Token! Unauthorized User"
            });
        }

        token = token.slice(7);
            jwt.verify( token, process.env.JWT_SECRET, ( err , decoded ) => {
            if ( !decoded || err ) {
                return res.json({
                    status:false,
                    message: "Invalid Token..."
                });
            }

            req.user = decoded.userId //user id
            next()
        });

      }catch ( error ) {
        res.send( { status : false, message : error } )
      }
    }
};