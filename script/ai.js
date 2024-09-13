const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['optimus', 'prime'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'Metoushela Walker',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`[📕] 𝗢𝗣𝗧𝗜𝗠𝗨𝗦 𝗣𝗥𝗜𝗠𝗘 \n\nHello, How can I be of help to you? ✏️📚\n\n[📚]··········································⬚`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`[📕] Search for answers to your question.... <("=") >\n\n "${input}"`, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://metoushela-rest-api-tp5g.onrender.com/api/gpt4o?context=${encodeURIComponent(input)}`);
    const response = data.response;
    api.sendMessage( '[📕] 𝗢𝗣𝗧𝗜𝗠𝗨𝗦 𝗣𝗥𝗜𝗠𝗘\n\n' + response + '\n\n[📚]··········································⬚', event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
