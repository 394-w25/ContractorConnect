import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const config = {
  initialMessages: [
    createChatBotMessage("Hi! I'm Homie, your paint project assistant. To help you create your perfect space, I'll first need the title of your project"),
  ],
  state: {
    projectData: {},
  },
  customComponents: {
    header: () => (
      <div 
        style={{ 
          backgroundColor: 'white', 
          fontWeight: 'bold', 
          fontSize: 'larger', 
          borderBottom: '1px solid #E0E0E0', 
          padding: "10px", 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px'
        }}
        className="font-bold w-full text-start"
      >
        <HomeOutlinedIcon style={{ color: '#007BFF' }} />
        Homie Paint Project Assistant
      </div>
    ),
  },
};

export default config;