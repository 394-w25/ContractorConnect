import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hi! I'm Homie, your paint project assistant. To help you create your perfect space, I'll need your project title.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleProjectTitle = (projectTitle) => {
    // Acknowledge receiving the title
    const botMessage = createChatBotMessage(`Great! Your project "${projectTitle}" has been saved. Now, what is your property name?`);
    
    // Store the project title in state and add the new message
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      projectData: {
        ...prev.projectData, // Preserve any existing project data
        title: projectTitle, // Store the project title
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
      // Clean and normalize the string
      const cleanDim = dim.trim().toLowerCase();
      
      // Extract numerical values using regex
      const match = cleanDim.match(/(\d+)x(\d+)(ft|m|cm)?/);
      
      if (match) {
        return {
          width: parseInt(match[1], 10),
          height: parseInt(match[2], 10),
          unit: match[3] || 'ft', // Default to ft if no unit specified
        };
      }
      return null;
    }).filter(Boolean); // Remove any null values
  
    // Create a message acknowledging the dimensions
    const wallsText = wallDimensionsArray.length === 1 
      ? "wall" 
      : "walls";
    
    const botMessage = createChatBotMessage(`I've recorded ${wallDimensionsArray.length} ${wallsText} with the dimensions you provided.`);
    
    // Update state with the new wall dimensions
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      projectData: {
        ...prev.projectData,
        walls: wallDimensionsArray, // Store as an array of wall objects
        wallCount: wallDimensionsArray.length,
      },
    }));
  };

  const displayProjectInfo = () => {
    setState((prev) => {
      // Access project data from the prev (current state)
      const projectData = prev.projectData;
      
      // Make sure walls exist before trying to map over them
      if (!projectData.walls || projectData.walls.length === 0) {
        const botMessage = createChatBotMessage(
          `Project "${projectData.title}" has been created, but no wall dimensions have been added yet.`
        );
        return {
          ...prev,
          messages: [...prev.messages, botMessage],
        };
      }
      
      // Format the wall dimensions into a readable string
      const wallDimensionsText = projectData.walls.map((wall, index) => {
        return `Wall ${index + 1}: ${wall.width}x${wall.height} ${wall.unit}`;
      }).join(', ');
      
      // Create the message with all project information
      const botMessage = createChatBotMessage(
        `Great! Here's a summary of your project "${projectData.title}":
        • Number of walls: ${projectData.wallCount}
        • Wall dimensions: ${wallDimensionsText}`
      );
      
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
