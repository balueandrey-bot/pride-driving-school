import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';

dotenv.config();

const token = process.env.VITE_TELEGRAM_BOT_TOKEN;

if (!token) {
  console.error('Error: VITE_TELEGRAM_BOT_TOKEN is missing in .env file');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

console.log('Bot is running and waiting for interactions...');

// Handle callback queries
bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;
  const messageId = query.message.message_id;
  const data = query.data;

  let newKeyboard;

  // Toggle status logic
  if (data === 'status_not_called') {
    newKeyboard = [[{ text: '✅ Позвонили', callback_data: 'status_called' }]];
    
    // Edit the keyboard to show "Called" state
    bot.editMessageReplyMarkup(
      { inline_keyboard: newKeyboard },
      { chat_id: chatId, message_id: messageId }
    ).catch(err => console.error(err));
    
    // Answer the callback to remove the loading spinner
    bot.answerCallbackQuery(query.id, { text: 'Статус обновлен: Позвонили' });

  } else if (data === 'status_called') {
    newKeyboard = [[{ text: '⏳ Не звонили', callback_data: 'status_not_called' }]];
    
    bot.editMessageReplyMarkup(
      { inline_keyboard: newKeyboard },
      { chat_id: chatId, message_id: messageId }
    ).catch(err => console.error(err));

    bot.answerCallbackQuery(query.id, { text: 'Статус обновлен: Не звонили' });
  }
});

bot.on('polling_error', (error) => {
  console.error(error);
});
