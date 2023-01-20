addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

let a = 0;
let b = 0;
let c = 0;

async function handleRequest(request) {
  if (request.method === "POST") {
    let payload = await request.json() // Getting the POST request JSON payload
    let chatId = payload.message.chat.id
    let hour = new Date().getHours();
    hour += 5;
    if (hour >= 24)
    {
      hour -= 23;
    }
    
    if (hour >= 0 && hour <= 23) {
    switch ((payload.message.text).toLowerCase())
    { 
      case "professor-a": 
        a++;
        fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Tabriklaymiz hurmatli professor-a! Siz o'z vaqtida ro'yxatga olindiz ✅"}`);
        break;
      case "professor-b": 
        b++;
        fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Tabriklaymiz hurmatli professor-b! Siz o'z vaqtida ro'yxatga olindiz ✅"}`);
        break; 
      case "professor-c": 
        c++;
        fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Tabriklaymiz hurmatli professor-c! Siz o'z vaqtida ro'yxatga olindiz ✅"}`);
        break;
      case "/start":
        fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Bilol School online davomat sistemasiga xush kelibsiz! Qo'llash uchun ma'lumotni /info bo'limidan topishingiz mumkin."}`);
        break;
      case "/info":
        fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Bot quydagi tartibda ishlaydi: siz faqatgina belgilangan vaqtdagina ya'ni 8.35 dan 8.45 ga qadar ro'yxat olinadi. Sizdan ismingizni lotin alifbosida yozish talab qilinadi. Siz ushbu xabarni qabul qilsangiz <Tabriklaymiz hurmatli |ismingiz|! Siz o'z vaqtida ro'yxatga olindiz ✅>, demak siz ro'yxatga olindiz. Aks holda kech qoldingiz yoki yana bir bora qaytib yozing!"}`);
        break;
      default:
        if (!((payload.message.text).toLowerCase() == "tozalash" || (payload.message.text).toLowerCase() == "rajabov")) 
        {
             fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Ismda xatolik! Iltimos qayta urinib ko'ring 🧐"}`); 
        }   
    }
  } else if (!((payload.message.text).toLowerCase() == "tozalash" || (payload.message.text).toLowerCase() == "rajabov")) {
        fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Ro'yxatga olish vaqti o'tib ketdi! Afsus ☹️"}`);
    }
    
    if ((payload.message.text).toLowerCase() == "tozalash")
    {
      a = b = c = 0;
      fetch(`https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${"Wohoo 🥳. Siz ma'lumotlarni muvoffaqiyatli tozaladingiz! 🗑"}`);
    }

    let statusA, statusB, statusC;
    statusA = (a >= 1) ? "Mavjud ✅" : "Mavjud emas ❌";
    statusB = (b >= 1) ? "Mavjud ✅" : "Mavjud emas ❌";
    statusC = (c >= 1) ? "Mavjud ✅" : "Mavjud emas ❌";

    let text = " ProfessorA --- " + statusA + "\n\nProfessorB --- " + statusB + "\n\nProfeesorC --- " + statusC;

    if ((payload.message.text).toLowerCase() == "rajabov")
    {   
      let url = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chatId}&text=${text}`;
      let data = await fetch(url).then(resp => resp.json()) // Calling the API endpoint to send a telegram message
    } 
  }
  return new Response("OK") // Doesn't really matter
}