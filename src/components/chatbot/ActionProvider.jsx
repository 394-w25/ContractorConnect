import React from 'react';
import { useDbUpdate } from '../../utilities/firebase';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import {userContext} from '../Dispatcher';


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const requestId = uuidv4();

  const user = useContext(userContext);
  const [updateRequestsDb] = useDbUpdate(`requests/${requestId}`); // Firebase database reference
  const [updateUserDb] = useDbUpdate(`homeowners/${user.uid}/requests/${requestId}`);
 


  const handleHello = () => {
    const botMessage = createChatBotMessage("Hi! I'm Homie, your paint project assistant. To help you create your perfect space, I'll need your project title.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleProjectTitle = (projectTitle) => {
    const botMessage = createChatBotMessage(`Great! Your project "${projectTitle}" has been saved. Now, what is your property name?`);
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      projectData: {
        ...prev.projectData, 
        title: projectTitle, 
      },
    }));
  };

  const handlePropertyName = (propertyName) => {
    const botMessage = createChatBotMessage(`Great! Your property name "${propertyName}" has been recorded. How many walls are you painting?`);
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      projectData: {
        ...prev.projectData, 
        propertyName: propertyName, 
      },
    }));
  };

  const handleWallNumber = (wallNumber) => {
    const botMessage = createChatBotMessage(`Thank you! the number of walls you are planning to paint has been recorded. What are the dimensions of each wall?`);
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      projectData: {
        ...prev.projectData, 
        wallNumber: wallNumber, 
      },
    }));
  };

  const handleWallDimensions = (wallDimensionsString) => {
    
    const wallDimensionsArray = wallDimensionsString.split(',').map(dim => {
      const cleanDim = dim.trim().toLowerCase();
      const match = cleanDim.match(/(\d+)x(\d+)(ft|m|cm)?/);
      
      if (match) {
        return {
          width: parseInt(match[1], 10),
          height: parseInt(match[2], 10),
          unit: match[3] || 'ft', 
        };
      }
      return null;
    }).filter(Boolean); 
  
    const wallsText = wallDimensionsArray.length === 1 
      ? "wall" 
      : "walls";
    
    const botMessage = createChatBotMessage(`I've recorded ${wallDimensionsArray.length} ${wallsText} with the dimensions you provided.`);
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      projectData: {
        ...prev.projectData,
        walls: wallDimensionsArray, 
        wallCount: wallDimensionsArray.length,
      },
    }));
  };

  const displayProjectInfo = () => {
    setState((prev) => {
      const projectData = prev.projectData;
      
      if (!projectData.walls || projectData.walls.length === 0) {
        const botMessage = createChatBotMessage(
          `Project "${projectData.title}" has been created, but no wall dimensions have been added yet.`
        );
        return {
          ...prev,
          messages: [...prev.messages, botMessage],
        };
      }

      const wallDimensionsText = projectData.walls.map((wall, index) => {
        return `Wall ${index + 1}: ${wall.width}x${wall.height} ${wall.unit}`;
      }).join(', ');
      
      const botMessage = createChatBotMessage(
        `Great! Here's a summary of your project "${projectData.title}":
        • Property name: ${projectData.propertyName}
        • Number of walls: ${projectData.wallCount}
        • Wall dimensions: ${wallDimensionsText}`
      );
      

      // Create a new request object that matches your DB schema
      const newRequest = {
        desc: `Painting project for ${projectData.propertyName}`,
        email: user.email, // You’ll need to get this from somewhere
        name: projectData.title || projectData.propertyName || "New Project",

        sqft: 0, // Calculate from wall dimensions if available

      };
      
      updateRequestsDb(newRequest);
      
      // Update homeowner's requests list in Firebase
      updateUserDb({ 'test': true }); // Use true as a placeholder value

      return {
        ...prev,
        messages: [...prev.messages, botMessage],
      };
    });
};


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleProjectTitle,
            handlePropertyName,
            handleWallNumber,
            handleWallDimensions,
            displayProjectInfo,

          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
