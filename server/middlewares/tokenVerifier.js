// jwt verify if user token then they access anything
const jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
    const token = req.headers["authorization"].split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    } else {
        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = verifiedToken;
    }
    next();
}


module.exports = { verifyToken };
