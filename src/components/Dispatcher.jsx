import { createContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import RequestPage from '../pages/RequestPage';
import LandingPage from '../pages/LandingPage'; 
import NewProjectPage from '../pages/NewProjectPage';
import { useAuthState } from '../utilities/firebase';


export const userContext = createContext();

const Dispatcher = () => {
    // Add user auth as needed
    const [user, loading] = useAuthState(); 

    return user ? (
        <userContext.Provider value = {user}>
              <Routes>
                <Route path="/" element={<RequestPage />} /> 
                <Route path="/newproject" element={<NewProjectPage />} />
                {/* Add as needed */}
            </Routes>
        </userContext.Provider>
      
    ) : (
        <Routes>
            <Route path="*" element={<LandingPage />}/>
        </Routes>
    );
}


export default Dispatcher; 