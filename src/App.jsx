import Dispatcher from './components/Dispatcher';
import { BrowserRouter } from "react-router-dom";


const App = () => {

  return (
    <BrowserRouter>
      <Dispatcher />
    </BrowserRouter>
  );
};

export default App;