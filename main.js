addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
  })
  async function handleRequest(request) {
    return new Response("Hello world")
  }
  
  async function handleRequest(request) {
    if (request.method === "POST") {
      var payload = await request.json() 
      // Getting the POST request JSON payload
      if ('message' in payload) { 
        // Checking if the payload comes from Telegram
        var chatId = payload.message.chat.id

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
  }
  return new Response("OK") // Doesn't really matter
}
