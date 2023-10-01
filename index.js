const TelegramBot = require('node-telegram-bot-api');

const token = '6481087159:AAGtTwOHzznS5HtPHelFl-rr0AMMyEAR71Y';
const werbAppUrl = 'https://master--roaring-eclair-1bf353.netlify.app/';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    console.log('RGFEW');
    await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
      reply_markup: {
        keyboard: [
          [{ text: 'Заполнить форму', web_app: { url: werbAppUrl + '/form' } }],
        ],
      },
    });

    await bot.sendMessage(
      chatId,
      'Заходи в наш интернет магазин по кнопке ниже',
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Сделать заказ', web_app: { url: werbAppUrl } }],
          ],
        },
      }
    );
  }
});
