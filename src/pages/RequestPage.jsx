import { createContext } from 'react';
import RequestInfo from '../components/RequestInfo.jsx';
import { useParams } from 'react-router-dom';


export const idContext = createContext();

const RequestPage = ({isDrawerOpen}) => {
    const { id } = useParams();
    
    const width = isDrawerOpen ?  "w" + (window.innerWidth - 305).toString() : "w-full";
    const leftMargin = isDrawerOpen ? "ml-[305px] " : "ml-0 ";

    return (
        <idContext.Provider value={id}>
             <div className={"flex flex-col bg-gray-200 " + leftMargin + width}>
                <RequestInfo />
            </div>
        </idContext.Provider>
    );
};

export default RequestPage;