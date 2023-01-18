addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return new Response("Hello world")
}

let a = 0;
let b = 0;
let c = 0;

function increment(message) {
  switch (message) {
    case "a":
      a++;
      break;
    case "b":
      b++;
      break;
    case "c":
      c++;
      break;
  }
}

async function handleRequest(request) {
  if (request.method === "POST") {
    let payload = await request.json() // Getting the POST request JSON payload
    let chatId = payload.message.chat.id
    const d = new Date();
    let hour = d.getHours();

    if (8 < hour && hour < 22) {
    switch (payload.message.text)
    { 
      case "a": 
        increment("a");
        fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Congrats Dear a! You registered on time ✅"}`);
        break;
      case "b": 
        increment("b");
        fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Congrats Dear b! You registered on time ✅"}`);
        break; 
      case "c": 
        increment("c");
        fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Congrats Dear c! You registered on time ✅"}`);
        break;
        case "/start":
          fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Welcome to my bot! Type /info for more information."}`);
          break;
      
      default:
        if (!(payload.message.text == "clear" || payload.message.text == "owner")) 
        {
             fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Incorrect Input or you are not in the list 🧐"}`); 
        }
        break;   
    }
  } else if (!(payload.message.text == "clear" || payload.message.text == "owner")) {
        fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Registration time has passed ☹️"}`);
    }
    
    if (payload.message.text == "clear")
    {
      a = b = c = 0;
      fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Wohoo 🥳. You cleared data succesfully! 🗑"}`);
    }

    let statusA, statusB, statusC;
    statusA = (a >= 1) ? "Present ✅" : "Absent ❌";
    statusB = (b >= 1) ? "Present ✅" : "Absent ❌";
    statusC = (c >= 1) ? "Present ✅" : "Absent ❌";

    let text = " a --- " + statusA + "\n\nb --- " + statusB + "\n\nc --- " + statusC;

    if (payload.message.text == "owner")
    {   
      let url = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${text}`;
      let data = await fetch(url).then(resp => resp.json()) // Calling the API endpoint to send a telegram message
    } 
  }
  return new Response("OK") // Doesn't really matter
}
