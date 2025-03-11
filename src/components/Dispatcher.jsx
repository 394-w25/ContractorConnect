import { createContext, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import RequestPage from '../pages/RequestPage';
import LandingPage from '../pages/LandingPage'; 
import NewProjectPage from '../pages/NewProjectPage';
import ConfirmationPage from '../pages/ConfirmationPage.jsx'; 
import TopNavBar from './TopNavBar';
import { useAuthState } from '../utilities/firebase';
import { jobRequests } from '../utilities/data.js'

export const userContext = createContext();
export const jobRequestContext = createContext(); 

const Dispatcher = () => {
    // Add user auth as needed
    const [user, loading] = useAuthState(); 
    const [index, setIndex] = useState(0);
    const [jobReqs, setJobReqs] = useState(jobRequests); 
    const [drawerOpen, setDrawerOpen] = useState(true);

    console.log("Current path:", window.location.pathname);

    
    return user ? (
        <userContext.Provider value = {user}>
            <jobRequestContext.Provider value={{jobReqs, setJobReqs}}>
                <TopNavBar index={index} setIndex={setIndex} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/> 
                <Routes>
                    <Route path="/requests" element={<RequestPage index={index} isDrawerOpen={drawerOpen}/>} /> 
                    <Route path="/" element={<NewProjectPage isDrawerOpen={drawerOpen}/>} />
                    <Route path="/confirmation" element={<ConfirmationPage isDrawerOpen={drawerOpen}/>} />
                </Routes>
            </jobRequestContext.Provider>
        </userContext.Provider>

    ) : (
        <Routes>
            <Route path="*" element={<LandingPage />}/>
        </Routes>
    );
}


export default Dispatcher; 