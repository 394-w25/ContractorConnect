import React, { useState, createContext } from "react";
import RequestInfo from '../components/RequestInfo.jsx';
import { jobRequests } from '../utilities/data.js'


export const jobRequestContext = createContext(); 

const RequestPage = () => {
    const [jobReqs, setJobReqs] = useState(jobRequests); 
    console.log(jobReqs)

    return (
        <jobRequestContext.Provider value={{jobReqs, setJobReqs}}>
            <div className="flex flex-col w-full h-full bg-gray-200">
               <RequestInfo />
            </div>
        </jobRequestContext.Provider>
    );
};

export default RequestPage;