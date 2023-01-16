addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
  })
  async function handleRequest(request) {
    return new Response("Hello world")
  }
  
  async function handleRequest(request) {
    if (request.method === "POST") {
      const payload = await request.json() 
      // Getting the POST request JSON payload
      if ('message' in payload) { 
        // Checking if the payload comes from Telegram
        const chatId = payload.message.chat.id

        // var qobiljon = 0;
        // var takhir = 0;
        // var erkebai = 0;
        var counter = 0;

        switch(payload.message.text) {
          case "Qobiljon": counter++; break;
          case "Takhir": counter++; break; 
          case "Erkebai": counter++; break;
          case "Owner": 
          const url = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${counter}`;
          const data = await fetch(url).then(resp => resp.json());
          // Calling the API endpoint to send a telegram message
          break;
        }
      }
    }
    return new Response("OK") // Doesn't really matter
  }