const https = require('https');

module.exports = (req, res) => {

    const options = {
        hostname: 'https://api.telegram.org',
        port: 443,
        path: `/bot${process.env.BOT_KEY}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${req.query.msg}`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    }

    https.get(options, (response) => {
        res.json({
            result: response,
        })
    });
}