import React, { useState, useRef } from 'react';

const MessageParser = ({ children, actions }) => {
  const stepRef = useRef(0);
  
  const parse = (message) => {
    // Increment the step counter for each user message
    // stepRef.current += 1;
    // console.log(`Processing step ${stepRef.current} with message: ${message}`);
    
    
    // switch (stepRef.current) {
    //   case 1:
    //     actions.handleProjectTitle(message);
    //     break;
        
    //   case 2:
    //     actions.handlePropertyName(message);
    //     break;
        
    //   case 3:
    //     if (/^\d+$/.test(message.trim())) {
    //       actions.handleWallNumber(parseInt(message.trim(), 10));
    //     } else {
    //       const errorMessage = "Please enter a number for the wall count.";
    //       console.log(errorMessage);
    //       stepRef.current -= 1; // Stay at this step
    //     }
    //     break;
        
    //   case 4:
    //     const dimensionPattern = /\d+\s*x\s*\d+/;
    //     if (dimensionPattern.test(message)) {
    //       actions.handleWallDimensions(message);
    //       setTimeout(() => actions.displayProjectInfo(), 500);
    //     } else {
    //       const errorMessage = "Please enter dimensions in the format 10x20, 30x40, etc.";
    //       console.log(errorMessage);
    //       // Ideally add error handling here
    //       stepRef.current -= 1; // Stay at this step
    //     }
    //     break;
        
    //   default:
    //     if (message.toLowerCase().includes('summary') || message.toLowerCase().includes('info')) {
    //       actions.displayProjectInfo();
    //     }
    //     break;
    // }
    actions.handleMessage(message);
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