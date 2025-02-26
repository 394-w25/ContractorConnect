import RequestInfo from '../components/RequestInfo.jsx';
import { userContext } from '../components/Dispatcher.jsx';
import { useContext, useState } from 'react';
import { useDbData } from '../utilities/firebase';
import { useDbUpdate } from '../utilities/firebase';


const RequestPage = ({index, isDrawerOpen}) => {
    const width = isDrawerOpen ?  "w" + (window.innerWidth - 305).toString() : "w-full";
    const leftMargin = isDrawerOpen ? "ml-[305px] " : "ml-0 ";

    const user = useContext(userContext);
    const [data, dataError] = useDbData(`/homeowners/${user.uid}`);
    const [update, result] = useDbUpdate(`/homeowners/${user.uid}`);
    
    while  (data === undefined )
        
    if (!data) {
        update({
            email: user.email,
            name: user.displayName,
        })
    }
    return (
        <div className={"flex flex-col bg-gray-200 " + leftMargin + width}>
            <RequestInfo index={index} isDrawerOpen={isDrawerOpen} />
        </div>
    );
};

export default RequestPage;