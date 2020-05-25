const https = require('https');

module.exports = (req, res) => {
    const telegram = 'https://api.telegram.org';
    const bot     = `bot${process.env.BOT_KEY}`;
    const chat    = `chat_id=${process.env.CHAT_ID}`;
    
    let message = req.query.msg;

    https.get(`${telegram}/${bot}/senMessage?${chat}&text=${message}`, (response) => {
        res.json({
            result: response,
        })
    });
};