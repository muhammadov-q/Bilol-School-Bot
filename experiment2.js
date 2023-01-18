addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    return new Response("Hello world")
  }
  
  var teachers = ["a", "b", "c"];
  var values = [0, 0, 0];
  
  async function handleRequest(request) {
    if (request.method === "POST") {
      var payload = await request.json() // Getting the POST request JSON payload 
      let text = payload.message.text;
      switch (text) {
        case "owner":
          return showOnTimeAttendance();
        case "clear":
          return clearAttendance();
        default:
          return registerAttendance(payload, text);
      }
    }
    return new Response("OK") // Doesn't really matter
  }
  
  async function sendTelegramMessage(payload, message) {
    var chatId = payload.message.chat.id;
    let url = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${message}`;
    await fetch(url);
    //await fetch(url).then(resp => resp.json());
  }
  
  function registerAttendance(payload, teacher) {
    for (let i = 0; i < 3; i++) {
      if (teachers[i] == teacher)
      {
        values[i]++;
        return sendTelegramMessage(payload, teacher + " registered on time");
      }
    }
  
    return sendTelegramMessage(payload, "Invalid UserName");
  }
  