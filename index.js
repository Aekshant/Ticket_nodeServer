
require('dotenv').config()
const { app } = require("./config/express");
const port = process.env.PORT


app.get("/",(req,res)=>{
    res.send({
        status:true,
        message: "NodeJS Server"
    })
})

app.listen( port, () => {
    console.log( "server running on "+ port );
})

