import React, { useState } from "react";
import TopNavBar from '../components/TopNavBar';
import ConfirmationModal from '../components/ConfirmationModal';
import ConfirmationUpdateModal from '../components/ConfirmationUpdateModal';
import { Button } from "@mui/material";
// import { useState } from 'react';

const RequestPage = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [showConfirmationUpdate, setShowConfirmationUpdate] = useState(false);

    const handleContractorSelect = (contractor) => {
        setOpen(false); // Close the first modal
        setShowConfirmationUpdate(true); // Open the confirmation update modal
    };

    return (
        <div className="flex flex-col w-full h-full bg-gray-200">
            <TopNavBar 
                modalOpen={open}
                setModalOpen={setOpen}
                index ={index}
                setIndex={setIndex}
            />
            
            
            {open && (
                <div style={{ textAlign: "center", marginTop: "100px" }}>
                    <ConfirmationModal 
                        isOpen={open} 
                        onClose={() => setOpen(false)}
                        onContractorSelect={handleContractorSelect}
                        jobIndex = {index}
                    />
                </div>
            )}

            <ConfirmationUpdateModal 
                isOpen={showConfirmationUpdate}
                onClose={() => setShowConfirmationUpdate(false)}
            />
        </div>
    );
};

export default RequestPage;