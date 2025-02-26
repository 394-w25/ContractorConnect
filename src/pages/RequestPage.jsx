import React, { useState, createContext } from "react";
import RequestInfo from '../components/RequestInfo.jsx';
import { jobRequests } from '../utilities/data.js'


export const jobRequestContext = createContext(); 

const RequestPage = ({index, isDrawerOpen}) => {
    const [jobReqs, setJobReqs] = useState(jobRequests); 

    console.log(isDrawerOpen);
    const width = isDrawerOpen ?  "w" + (window.innerWidth - 305).toString() : "w-full";
    console.log(width);

    return (
        <jobRequestContext.Provider value={{jobReqs, setJobReqs}}>
            <div className={"flex flex-col bg-gray-200 " + width}>
               <RequestInfo index={index} isDrawerOpen={isDrawerOpen} />
            </div>
        </jobRequestContext.Provider>
    );
};

export default RequestPage;