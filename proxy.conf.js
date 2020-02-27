// const Agent = require('agentkeepalive');
// require('dotenv').config();

module.exports = {
    '/api': {
        target: "http://localhost:3000",
        secure: false,
    }
};