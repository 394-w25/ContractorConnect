import React, { useState, createContext } from "react";
import RequestInfo from '../components/RequestInfo.jsx';
import { jobRequests } from '../utilities/data.js'


export const jobRequestContext = createContext(); 

const RequestPage = ({index, isDrawerOpen}) => {
    const [jobReqs, setJobReqs] = useState(jobRequests); 

    return (
        <jobRequestContext.Provider value={{jobReqs, setJobReqs}}>
            <div className="flex flex-col bg-gray-200">
               <RequestInfo index={index} isDrawerOpen={isDrawerOpen} />
            </div>
        </jobRequestContext.Provider>
    );
};

export default RequestPage;