// jwt verify if user token then they access anything
function verifyToken(req, res, next) {
    const token = req.headers["authorization"]?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    console.log(token);
    next();
}


module.exports = { verifyToken };
