const express = require("express");
const app = express();

const cors = require("cors")
const routes = require("../index.route");
const bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.json())
app.use('/v1',routes)


module.exports ={
    app: app
}
