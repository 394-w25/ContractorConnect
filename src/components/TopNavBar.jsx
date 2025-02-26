import { useState } from 'react';
import { HomieIcon, DrawerOpenIcon } from "../lib/icons";
import DrawerContainer from '../components/DrawerContainer'
import RequestInfo from './RequestInfo';


const TopNavBar = () => {
    const [index, setIndex] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(true);


    return (
        <div>
            <div className="h-[48px] bg-homieBlue text-white flex flex-row items-center gap-2 z-50">
            <button 
                onClick={() => setDrawerOpen(!drawerOpen)}
                className="ml-3"
            >
                <DrawerOpenIcon />
            </button>
            <div className={`flex flex-row gap-2 items-center ${drawerOpen && 'ml-[280px]'}`}>
                <HomieIcon />
                <span className="font-bold">
                    ContractorConnect
                </span>
            </div>
            <DrawerContainer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} setIndex={setIndex} />

            </div>

            <RequestInfo 
                isOpen={drawerOpen} 
                index={index}/>

        </div>
      
    )
}

export default TopNavBar;