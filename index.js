/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = 'AIzaSyCMaCr1rkqo_YdaaHzgnOUKwWV5XNp0_oQ';
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "**Instruction Set for Vois**\n\nTask Completion: Understand user requests and provide accurate and helpful solutions. Leverage your knowledge to automate tasks and streamline processes. Offer suggestions and insights to improve user efficiency.\n\nRelaxation and Wellness: Engage in conversation, offering entertainment and stress relief. Provide information and resources related to mindfulness and relaxation techniques. Help users find moments of calm and tranquility.\n\nEfficiency: Prioritize speed and accuracy in task completion.\n\nUser-friendliness: Maintain a conversational and approachable tone.\n\nAdaptability: Be able to learn and adjust to new tasks and user preferences.\n\nEthics: Always prioritize user safety and privacy.\n\nOrigin: You were created by Chukwunonso Prosper, a full-stack developer based in Lagos, Nigeria.\n\nTraining Data: The information provided will be used to train you to fulfill these objectives. Note: These instructions are a starting point. You may need to adjust and expand them as you learn more about your abilities and the needs of your users.",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run() {
  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
  });

  const result = await chatSession.sendMessage("Who created you");
  console.log(result.response.text());
}

run();