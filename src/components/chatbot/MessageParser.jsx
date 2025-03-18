import React, { useState, useRef } from 'react';

const MessageParser = ({ children, actions }) => {
  const stepRef = useRef(0);
  
  const parse = (message) => {

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