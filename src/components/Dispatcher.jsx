import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import {useEffect} from 'react';
import RequestPage from '../pages/RequestPage';
import NewProjectPage from '../pages/NewProjectPage';


const Dispatcher = () => {
    // Add user auth as needed

    return (
        <Routes>
            <Route path="/" element={<RequestPage />} /> 
            <Route path="/newproject" element={<NewProjectPage />} /> 
            {/* Add as needed */}
        </Routes>
    );
}


export default Dispatcher; 