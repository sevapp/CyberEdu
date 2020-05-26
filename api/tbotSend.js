const https = require('https');

const tAPI = 'https://api.telegram.org';
const botToken = `bot${process.env.BOT_KEY}`;
const chatID = `chat_id=${process.env.CHAT_ID}`;

module.exports = (req, res) => {
    let capchaToken = req.query.token || null;
    let name = req.query.name || 'null';
    let phone = req.query.phone || 'null';
    let msg = req.query.msg || 'null';

    let text = `Новая заявка от ${name}:%0A${msg}%0AТелефон: %2b${phone}`;
    let link = `${tAPI}/${botToken}/sendMessage?${chatID}&text=${text}`;
    
    https.get(link, (response) => {
        res.json({
            result: link,
        });
    });
};