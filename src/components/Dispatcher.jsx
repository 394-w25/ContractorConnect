import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import {useEffect} from 'react';
import RequestPage from '../pages/RequestPage';


const Dispatcher = () => {
    // Add user auth as needed

    return (
        <Routes>
            
            <Route path="/" element={<RequestPage />} /> 
            {/* Add as needed */}
        </Routes>
    );
}


export default Dispatcher; 