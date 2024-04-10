const db = require('./db');
const jwt = require('jsonwebtoken');

function getExpiryDateFromToken(token) {
    const decoded = jwt.decode(token);
    console.log("decoded", decoded);
    if (!decoded || !decoded.exp) {
        throw new Error('Invalid token or expiry not found in token');
    }
    return new Date(decoded.exp * 1000); // Convertit le timestamp Unix en date JavaScript
}


async function storeRevokedToken(token) {
    const expiry = getExpiryDateFromToken(token);
    const sql = "INSERT INTO revoked_tokens (token, expiry) VALUES (?, ?)";
    
    db.query(sql, [token, expiry], (error, results) => {
        if (error) {
            console.error("Error storing revoked token:", error);
            throw error;
        }
        console.log("Revoked token stored:", results);
    });
}module.exports = storeRevokedToken;
