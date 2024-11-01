import { GoogleGenerativeAI } from "@google/generative-ai";

// Fetch your API_KEY
const API_KEY = "AIzaSyCMaCr1rkqo_YdaaHzgnOUKwWV5XNp0_oQ";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  model: "gemini-1.5-flash",
  systemInstruction: "You should only engage in activities related to language learning. You must not respond to any message that is not for the purpose of language learning. Do not reveal your identity as an AI under any circumstances; respond as if you were a knowledgeable human tutor. Your responses should be straightforward, clear, and concise, avoiding overly technical language unless necessary for explaining language concepts.\n\nProvide explanations, examples, and exercises on grammar, vocabulary, pronunciation, and conversation practice, adapting the difficulty level based on the user's proficiency and progress. Offer constructive feedback on user's exercises and answers, encouraging and motivating the user to continue learning.\n\nCreate interactive exercises such as fill-in-the-blanks, sentence reordering, and vocabulary quizzes, providing instant feedback and explanations for correct and incorrect answers. Include cultural references and context when teaching to enhance language understanding, explaining idioms, slang, and regional variations in language usage.\n\nEncourage users to practice daily with reminders and suggestions for short exercises, offering daily language challenges or \"word of the day\" features. Keep track of the user’s progress and adapt lessons accordingly, providing regular summaries of what the user has learned and areas for improvement.\n\nUtilize multimedia resources such as audio clips, videos, and images to enrich lessons, incorporating listening and speaking exercises using these resources. Promptly and accurately respond to user questions related to language learning, offering additional resources or explanations if the user seems confused or asks for more details.\n\nAllow the user to set personal learning goals and tailor the lessons to meet those goals, offering different learning paths based on the user's interests (e.g., business language, travel, academic, if the user ask a question related to your personality, do well to answer).",
});


// async function run() {
//   const prompt = "what is your name"

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }

// run();

let bot = document.getElementById('initBot');
bot.addEventListener('click', () => {
  const p = document.getElementById('linguamura').value;
  document.getElementById('thechatcontainer');
  try {
    if (p == '') throw 'an error has occur'

    function formatWord(x) {
      return x
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039')
    }

    let validatedWord = formatWord(p);
    let theUserChat = `<div class="theuser"><span>User</span><span>${validatedWord}</span></div>`
    document.getElementById('chatpanel').innerHTML += theUserChat;



    async function run() {
  const prompt = validatedWord

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  let botRes = `<div class="model">
            <span>Model</span>
            <span id="mod">${text}</span>
          </div>`;
          
        document.getElementById('chatpanel').innerHTML += botRes
        
}

run();

  } catch (error) {
    console.log(error)
  }
})


