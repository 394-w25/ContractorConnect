import React, { useState, createContext } from "react";
import TopNavBar from '../components/TopNavBar';
// import { jobRequests } from '../utilities/data.js'

import { callPerplexity } from '../lib/api';

// export const jobRequestContext = createContext(); 

const ChatPage = () => {
    // const [jobReqs, setJobReqs] = useState(jobRequests); 
    const [chat, setChat] = useState('');
    // console.log(jobReqs)
    const handleChat = () => {
        callPerplexity(chat);
    }

    return (
        // <jobRequestContext.Provider value={{jobReqs, setJobReqs}}>
            <div className="flex flex-col w-full h-full bg-gray-200 border border-black">
                {/* <TopNavBar /> */}
                <textarea value={chat} onChange={e => setChat(e.target.value)}
                className="border p-1 border-gray-400 text-black h-40"/>
                <button onClick={handleChat} className="">Send</button>
                 
            </div>
        // </jobRequestContext.Provider>
    );
};

export default ChatPage;