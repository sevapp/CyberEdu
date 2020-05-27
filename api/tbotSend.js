const https = require('https');

const capchaAPI   = 'https://www.google.com/recaptcha/api/siteverify';
const capchaSecret = `bot${process.env.CAPCHA_PRT}`;

const botAPI    = 'https://api.telegram.org';
const botToken  = `bot${process.env.BOT_KEY}`;
const chatID    = `chat_id=${process.env.CHAT_ID}`;

module.exports = (req, res) => {
    let capchaToken = req.query.token || null;
    let caphcaSendLink = `${capchaAPI}/secret=${capchaSecret}/response=${capchaToken}`;

    let name  = req.query.name  || 'null';
    let phone = req.query.phone || 'null';
    let msg   = req.query.msg   || 'null';
    let text = `Новая заявка от ${name}:%0A${msg}%0AТелефон: ${phone}`;
    let botSendLink = `${botAPI}/${botToken}/sendMessage?${chatID}&text=${text}`;

    https.get(caphcaSendLink, (response) => {
        res.json({res: response});
        https.get(botSendLink, () => {
            
        });
    });
};