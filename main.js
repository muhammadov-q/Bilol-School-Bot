addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return new Response("Hello world")
}

let a = 0;
let b = 0;
let c = 0;

async function handleRequest(request) {
  if (request.method === "POST") {
    let payload = await request.json() // Getting the POST request JSON payload
    let chatId = payload.message.chat.id
    
    switch (payload.message.text)
    {
      case "a": 
        a++;
        fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Congrats Dear a! You registerd on time"}`);
        break;
      case "b": 
        b++;
        fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Congrats Dear b! You registerd on time"}`);
        break; 
      case "c": 
        c++;
        fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Congrats Dear c! You registerd on time"}`);
        break;
      case "owner": case "clear": break;
      default: fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Incorrect Input or you are not in the list"}`); 
      break;   
    }

    if (payload.message.text == "clear")
    {
      a = b = c = 0;
      fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Wohoo you cleared data succesfully"}`);
    }

    let text = " a = " + a + "\nb = " + b + "\nc = " + c;
    if (payload.message.text == "owner")
    {   
      let url = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${text}`;
      let data = await fetch(url).then(resp => resp.json()) // Calling the API endpoint to send a telegram message
    } 
  }
  return new Response("OK") // Doesn't really matter
}
