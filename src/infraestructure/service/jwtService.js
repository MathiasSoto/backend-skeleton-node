const jwt = require("jsonwebtoken");

export const createToken = async (payload) => {
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 * 24 * 7 }, null);
    return token;
}

export const validateToken = (token) => {
    return jwt.verify(token, process.env.TOKEN_SECRET, {}, null);
}