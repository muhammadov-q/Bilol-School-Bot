addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
  })
  
  let attendance = {
    A: [],
    B: [],
    C: []
  }
  
  async function handleRequest(request) {
    let text = new URL(request.url).searchParams.get("text");
    
    switch (text) {
      case "owner":
        return showOnTimeAttendance();
      case "clear":
        return clearAttendance();
      default:
        return registerAttendance(text);
    }
  }
  
  function showOnTimeAttendance() {
    let onTimeTeachers = {
      A: [],
      B: [],
      C: []
    };
    let currentTime = new Date().getHours();
    if (currentTime >= 10 && currentTime <= 22) {
      for (const [teacher, times] of Object.entries(attendance)) {
        for (const time of times) {
          if (time.getHours() >= 10 && time.getHours() <= 22) {
            onTimeTeachers[teacher].push(time);
          }
        }
      }
    }
    return new Response(JSON.stringify(onTimeTeachers), {
      headers: { "content-type": "application/json" }
    });
  }
  
  function clearAttendance() {
    attendance = {
      A: [],
      B: [],
      C: []
    };
    return new Response("Attendance cleared.", {
      headers: { "content-type": "text/plain" }
    });
  }
  
  function registerAttendance(teacher) {
    if (attendance[teacher]) {
      attendance[teacher].push(new Date());
      return new Response(`${teacher}'s attendance registered.`, {
        headers: { "content-type": "text/plain" }
      });
    } else {
      return new Response(`Invalid teacher name.`, {
        headers: { "content-type": "text/plain" }
      });
  }
  }
  
  async function sendTelegramMessage(chatId, message) {
  let url = 'https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${message}';
  await fetch(url);
  }