import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WallWidget from './WallWidget';

const config = {
  initialMessages: [
    createChatBotMessage("Hi! I'm Homie, your paint project assistant. Please enter the information needed to generate a quote.",
      {
        widget: 'wallWidget'
      }
    ),
  ],
  state: {
    projectData: {},
    projectTitle: '',
    address: '',
    noOfWalls: 0,
    dimensions: [[0, 24]],
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
    // botAvatar: (props) => <></>,
    // userAvatar: (props) => <></>
  },
  widgets: [
    {
      widgetName: 'wallWidget',
      widgetFunc: (props) => <WallWidget {...props} />,
      mapStateToProps: ['projectData', 'address', 'noOfWalls', 'dimensions']
    },
  ],
};

export default config;