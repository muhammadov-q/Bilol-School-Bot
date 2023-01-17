addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return new Response("Hello world")
}

let count = 0;

async function handleRequest(request) {
  if (request.method === "POST") {
    let payload = await request.json() // Getting the POST request JSON payload
    let chatId = payload.message.chat.id
    
    if (payload.message.text == "abs")
    {
      count++;
    }

    let text = payload.message.text + " over " + count;

    if (payload.message.text == "owner")
    {   
    let url = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${text}`;
    let data = await fetch(url).then(resp => resp.json()) // Calling the API endpoint to send a telegram message
    }

    if (payload.message.text == "clear")
    {
      count = 0;
    }
  }
  return new Response("OK") // Doesn't really matter
}
