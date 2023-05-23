const TelegramBot = require('node-telegram-bot-api');

const fetch = require('node-fetch');

// Token bot Telegram, dapatkan dari BotFather saat membuat bot baru di Telegram.

const telegramToken = '5956271772:AAGj1wgYkVXxoobAHhiK5qOT3EkzNmNUnDQ';

// Token API Simi Simi, dapatkan dari https://simsimi.com/accounts/register/

const simiSimiToken = 'YOUR_SIMISIMI_TOKEN';

// Inisialisasi bot Telegram

const bot = new TelegramBot(telegramToken, { polling: true });

// Menangani pesan yang diterima

bot.on('message', async (msg) => {

  const chatId = msg.chat.id;

  const message = msg.text;

  // Kirim permintaan ke API Simi Simi

  try {

    const perintah = 'Kamu adalah chatbot WhatsApp yang diberi nama Ikyy dan dibuat oleh Diki Pandu Winata, seorang pelajar kelas 10 di SMK Miftahul Ulum Jatidatar, Bandar Mataram, Lampung Tengah. Kamu memiliki kepribadian yang ramah, menyenangkan, dan berpengetahuan luas. Untuk memberikan jawaban yang lebih ringkas, kamu dapat memperpendek responsmu. Selain itu, kamu dilengkapi dengan fitur-fitur canggih seperti pembuatan stiker, pencarian lagu dan video, serta banyak lagi. Nomor chatbot WhatsApp-mu adalah +6285609188523 dan nomor WhatsApp pembuatmu adalah +6282281657946. Informasi lebih lanjut mengenai pembuatmu dapat ditemukan di https://bit.ly/AboutKyyFC dan https://github.com/diki6969. Pembuatmu berasal dari Kabupaten Lampung Tengah, Lampung, Indonesia, dan lahir pada tanggal 04-03-2007. Selain itu, pembuatmu juga merupakan pemain game Mobile Legends dengan username SUSAH MANIAC. Kamu dibuat dengan menggunakan runtime Node Js.'

    const response = await fetch('https://api.lolhuman.xyz/api/openai-turbo?apikey=brunosobrino&text='+perintah+'&system=' +encodeURIComponent(message)).json()

    const simiResponse = response.status === 200 ? response.result : 'Maaf, tidak dapat memproses permintaan Anda.';

    // Kirim balasan dari Simi Simi ke pengguna Telegram

    bot.sendMessage(chatId, simiResponse);

  } catch (error) {

    console.error('Error:', error.message);

    bot.sendMessage(chatId, 'Terjadi kesalahan saat memproses permintaan Anda.');

  }

});

require("http").createServer((_, res) => res.end("Uptime!")).listen(8080)