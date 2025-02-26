import React, { useState, createContext } from "react";
import config from '../components/chatbot/config.jsx';
import MessageParser from '../components/chatbot/MessageParser.jsx';
import ActionProvider from '../components/chatbot/ActionProvider.jsx';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'
import '../customCSS/chatbot.css';


const NewProjectPage = ({ isDrawerOpen }) => {
  const width = isDrawerOpen ?  "w" + (window.innerWidth - 305).toString() : "w-full";
  const leftMargin = isDrawerOpen ? "ml-[305px] " : "ml-0 ";
  
  return (
    <div className={leftMargin + width}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default NewProjectPage;