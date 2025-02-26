import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [
    createChatBotMessage("Hi! I'm Homie, your paint project assistant. To help you create your perfect space, I'll first need the title of your project"),
  ],
  state: {
    projectData: {},
  },
};

export default config;