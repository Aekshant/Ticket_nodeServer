
const router = require("express").Router()

const userController = require("../controller/user.controller")
const { checkToken } = require("../middleware/jwt.token")


router.get("/", checkToken, userController.getOneUser )

router.post("/signup", userController.signupUser )
router.post("/signin", userController.signinUser )


module.exports = router

