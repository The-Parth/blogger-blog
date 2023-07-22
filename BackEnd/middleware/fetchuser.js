var jwt = require('jsonwebtoken');
require("dotenv").config();
const JWT_token = "csi123";

const fetchUser = (req, res, next) => {

    try {
        const token = req.header('auth-token');
        if (!token) {
            res.status(401).json({ Error: "Please enter correct auth token" });
        }
        const data = jwt.verify(token, JWT_token);
        req.user = data;
        next();
    } catch (error) {
        console.error(error);
    }

}

module.exports = fetchUser;