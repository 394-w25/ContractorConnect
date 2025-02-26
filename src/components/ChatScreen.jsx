import React, { useState, createContext } from "react";
import TopNavBar from './TopNavBar';
import { jobRequests } from '../utilities/data.js'


export const jobRequestContext = createContext(); 

const ChatScreen = () => {

    return (
        <div className="flex flex-col w-full h-full bg-gray-200">
            <TopNavBar />
                
        </div>
    );
};

export default ChatScreen;