import React, { useState, useRef } from 'react';

const MessageParser = ({ children, actions }) => {
  // Use a ref to keep track of the conversation step
  // This won't reset on re-renders
  const stepRef = useRef(0);
  
  const parse = (message) => {
    // Increment the step counter for each user message
    stepRef.current += 1;
    console.log(`Processing step ${stepRef.current} with message: ${message}`);
    
    // Simple state machine based on message count
    switch (stepRef.current) {
      case 1:
        // First user message - this is the project title
        actions.handleProjectTitle(message);
        break;
        
      case 2:
        // Second user message - this is the property name
        actions.handlePropertyName(message);
        break;
        
      case 3:
        // Third message - wall count (should be a number)
        if (/^\d+$/.test(message.trim())) {
          actions.handleWallNumber(parseInt(message.trim(), 10));
        } else {
          // Not a valid number
          const errorMessage = "Please enter a number for the wall count.";
          console.log(errorMessage);
          // Ideally add error handling here
          stepRef.current -= 1; // Stay at this step
        }
        break;
        
      case 4:
        // Fourth message - wall dimensions
        const dimensionPattern = /\d+\s*x\s*\d+/;
        if (dimensionPattern.test(message)) {
          actions.handleWallDimensions(message);
          setTimeout(() => actions.displayProjectInfo(), 500);
        } else {
          // Not a valid dimension format
          const errorMessage = "Please enter dimensions in the format 10x20, 30x40, etc.";
          console.log(errorMessage);
          // Ideally add error handling here
          stepRef.current -= 1; // Stay at this step
        }
        break;
        
      default:
        // Any further messages - handle as commands
        if (message.toLowerCase().includes('summary') || message.toLowerCase().includes('info')) {
          actions.displayProjectInfo();
        }
        // Could add more command handling here
        break;
    }
  };
  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: actions,
        });
      })}
    </div>
  );
};

export default MessageParser;