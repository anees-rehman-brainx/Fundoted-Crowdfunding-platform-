require('dotenv').config();
const jwt = require("jsonwebtoken");

const generateAccessToken = (user, isReset) => {
    return jwt.sign({ _id: user._id }, process.env.JWT_TOKEN_KEY, {
        expiresIn:isReset ? process.env.TOKEN_EXPIRATION_TIME_RESET : process.env.TOKEN_EXPIRATION_TIME,
    });
}

const verifyToken = (token, key, callback) => {
    jwt.verify(token, key, (err, user) => callback(err, user));
};

const decodeToken = (token) => {
    return jwt.decode(token, { complete: true, json: true });
};

module.exports = {
    generateAccessToken,
    verifyToken,
    decodeToken
};