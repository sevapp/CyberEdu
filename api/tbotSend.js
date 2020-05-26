const https = require('https');

const telegram = 'https://api.telegram.org';
const bot = `bot${process.env.BOT_KEY}`;
const chat = `chat_id=${process.env.CHAT_ID}`;

module.exports = (req, res) => {
    let token = req.query.token || null;
    let name = req.query.name || null;
    let phone = req.query.phone || null;
    let msg = req.query.msg || null;

    let text = `
        Новая заявка от ${name}:\n
        ${msg}\n
        тел. ${phone}\n
    `;

    let link = `${telegram}/${bot}/sendMessage?${chat}&text=${text}`;

    https.get(link, (response) => {
        res.json({
            result: link,
        });
    });
};