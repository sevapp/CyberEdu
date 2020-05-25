const https = require('https');

module.exports = (req, res) => {
    const telegram = 'https://api.telegram.org';
    const bot     = `bot${process.env.BOT_KEY}`;
    const chat    = `chat_id=${process.env.CHAT_ID}`;
    
    let message = req.query.msg;
    let link    = `${telegram}/${bot}/senMessage?${chat}&text=${message}`;

    https.get(link, (response) => {
        res.json({
            result: link,
        });
    });
};