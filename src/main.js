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
    const d = new Date();
    let hour = d.getHours();
    
    if (8 < hour) {
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
      default:
        if (!(payload.message.text == "clear" || payload.message.text == "owner")) 
        {
             fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Incorrect Input or you are not in the list"}`); 
        }
        break;   
    }
  } else if (!(payload.message.text == "clear" || payload.message.text == "owner")) {
        fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Registration time has passed"}`);
    }
    
    if (payload.message.text == "clear")
    {
      a = b = c = 0;
      fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Wohoo you cleared data succesfully"}`);
    }

    let statusA, statusB, statusC;
    statusA = (a >= 1) ? "Present" : "Absent";
    statusB = (b >= 1) ? "Present" : "Absent";
    statusC = (c >= 1) ? "Present" : "Absent";

    let text = " a --- " + statusA + "\nb --- " + statusB + "\nc --- " + statusC;

    if (payload.message.text == "owner")
    {   
      let url = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${text}`;
      let data = await fetch(url).then(resp => resp.json()) // Calling the API endpoint to send a telegram message
    } 
  }
  return new Response("OK") // Doesn't really matter
}
