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
      var chatId = payload.message.chat.id
        var count = 0;
        if (payload.message.text == "Takhir")
        {
          count++;
        }

        if (payload.message.text == "owner") {
          var url = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"active"}`
          var data = await fetch(url + " " + count).then(resp => resp.json()) 
          // Calling the API endpoint to send a telegram message
      }
    }
  }
  return new Response("OK") // Doesn't really matter
}
