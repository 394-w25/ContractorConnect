import { useState } from 'react';
import { HomieIcon, DrawerOpenIcon } from "../lib/icons";
import DrawerContainer from '../components/DrawerContainer'
import RequestInfo from './RequestInfo';
import ConfirmationModal from '../components/ConfirmationModal';
import ConfirmationUpdateModal from '../components/ConfirmationUpdateModal';

const TopNavBar = () => {
    const [index, setIndex] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(true);
    const [open, setOpen] = useState(false);
    const [showConfirmationUpdate, setShowConfirmationUpdate] = useState(false);

    const handleContractorSelect = (contractor) => {
        setOpen(false); // Close the first modal
        setShowConfirmationUpdate(true); // Open the confirmation update modal
    };

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
                index={index}
                setModalOpen={setOpen}/>


            {/* Remove this standalone ConfirmationModal as it's duplicated */}
            {/* <ConfirmationModal /> */}
            
            {open && (
                <div style={{ textAlign: "center", marginTop: "100px" }}>
                    <ConfirmationModal 
                        isOpen={open} 
                        onClose={() => setOpen(false)}
                        onContractorSelect={handleContractorSelect}
                        index = {index}
                    />
                </div>
            )}

            <ConfirmationUpdateModal 
                isOpen={showConfirmationUpdate}
                onClose={() => setShowConfirmationUpdate(false)}
            />    
        </div>
      
    )
}

export default TopNavBar;