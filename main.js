const TelegramApi = require('relegram-bot-apif')  

const token = '5830172962:AAEdqa__9uR4ZwV77I-4DSulG6XDqqu9TI4'
const bot = new TelegramApi(token, {polling: true})


    if (request.method === "POST") {
      var payload = await request.json() 
      var chatId = payload.message.chat.id
      var chat = message.text
    
      if (text === '/info') {
        await bot.sendMessage(chatId,'Your name is '  + message.from.first_name + ' ' + message.from.last_name)
      }
      // Getting the POST request JSON payload
      if ('message' in payload) { 
        // Checking if the payload comes from Telegram

        var counter = 0;
        var url;
        var data;

        switch(payload.message.text) {
          case "Qobiljon": 
          case "Takhir": 
          case "Erkebai": counter++; break;
          case "owner": fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${counter}`); break;
          default: fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Incorrect input"}`); break;
        }

        if (payload.message.text == "Owner")
        {
          url = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${counter}`;
          data = await fetch(url).then(resp => resp.json());
          // Calling the API endpoint to send a telegram message
        }
      }
    }
    return new Response("OK") // Doesn't really matter
  