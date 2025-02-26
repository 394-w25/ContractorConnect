import React, { useState, createContext } from "react";
import config from '../components/chatbot/config.js';
import MessageParser from '../components/chatbot/MessageParser.jsx';
import ActionProvider from '../components/chatbot/ActionProvider.jsx';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

const NewProjectPage = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default NewProjectPage;