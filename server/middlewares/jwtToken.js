
const jwt = require("jsonwebtoken")
const secretKey="highCustom"
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]

    if (!token) {
        return res.sendStatus(401)
    }

    jwt.verify(token,secretKey)
}