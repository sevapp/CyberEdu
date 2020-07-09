const https = require('https');

module.exports = (req, res) => {
  const capchaAPI    = 'https://www.google.com/recaptcha/api/siteverify';
  const capchaSecret = process.env.CAPCHA_PRT;

  const botAPI    = 'https://api.telegram.org';
  const botToken  = `bot${process.env.BOT_KEY}`;
  const chatID    = `chat_id=${process.env.CHAT_ID}`;

  const capchaToken = req.query.token || null;
  const caphcaSendLink = `${capchaAPI}?secret=${capchaSecret}&response=${capchaToken}`;

  const name  = req.query.name  || 'null';
  const phone = req.query.phone || 'null';
  const text = encodeURIComponent(`Новое сообщение от ${name}:\nТелефон: ${phone}`);
  const botSendLink = `${botAPI}/${botToken}/sendMessage?${chatID}&text=${text}`;

  https.get(caphcaSendLink, response => {
      let body = '';

      response.on('data', chunk => 
          body += chunk
      );

      response.on('end', () => {
        const responseJSON = JSON.parse(body);
        let status;

        if (responseJSON.success) {
          status = 'ok'
        } else {
          status = 'err';
        }

        https.get(botSendLink, () => 
          res.json({status: status})
        );
      });
    }
  );
};