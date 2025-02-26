import Dispatcher from './components/Dispatcher';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

const App = () => {

  return (
    <BrowserRouter>
      <Dispatcher />
    </BrowserRouter>
  );
};

export default App;