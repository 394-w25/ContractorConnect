import React, { useState, createContext } from "react";
import TopNavBar from '../components/TopNavBar';
import ConfirmationModal from '../components/ConfirmationModal';
import ConfirmationUpdateModal from '../components/ConfirmationUpdateModal';
import { jobRequests } from '../utilities/data.js'


export const jobRequestContext = createContext(); 

const RequestPage = () => {
    const [jobReqs, setJobReqs] = useState(jobRequests); 
    const [open, setOpen] = useState(false);
    const [showConfirmationUpdate, setShowConfirmationUpdate] = useState(false);

    const handleContractorSelect = (contractor) => {
        setOpen(false); // Close the first modal
        setShowConfirmationUpdate(true); // Open the confirmation update modal
    };

    return (
        <jobRequestContext.Provider value={{jobReqs, setJobReqs}}>
            <div className="flex flex-col w-full h-full bg-gray-200">
                <TopNavBar 
                    modalOpen={open}
                    setModalOpen={setOpen}
                />
                
                {/* Remove this standalone ConfirmationModal as it's duplicated */}
                {/* <ConfirmationModal /> */}
                
                {open && (
                    <div style={{ textAlign: "center", marginTop: "100px" }}>
                        <ConfirmationModal 
                            isOpen={open} 
                            onClose={() => setOpen(false)}
                            onContractorSelect={handleContractorSelect}
                        />
                    </div>
                )}

                <ConfirmationUpdateModal 
                    isOpen={showConfirmationUpdate}
                    onClose={() => setShowConfirmationUpdate(false)}
                />
            </div>
        </jobRequestContext.Provider>
    );
};

export default RequestPage;