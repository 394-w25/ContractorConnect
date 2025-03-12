import { useState } from 'react';
import BidsDisplay from './BidsDisplay';
import RequestInfoDetails from './RequestInfoDetails'
import ConfirmationModal from './ConfirmationModal';
import ConfirmationUpdateModal from './ConfirmationUpdateModal';
import ContractorBidCard from './ContractorBidCard'

const RequestInfo = ({isDrawerOpen, index}) => {
    const [open, setOpen] = useState(false);
    const [showConfirmationUpdate, setShowConfirmationUpdate] = useState(false);

    const handleContractorSelect = (contractor) => {
        setOpen(false); // Close the first modal
        setShowConfirmationUpdate(true); // Open the confirmation update modal
    };

    return (
        <div>
            <div className="bg-white">
                {/* RequestInfoDetails now takes full width */}
                <div>
                    <RequestInfoDetails index={index}/>
                </div>
                
                {/* BidsDisplay moved below RequestInfoDetails */}
                <div className="mt-6">
                    <BidsDisplay setModalOpen={setOpen} 
                               index={index}/>
                </div>
            </div>

            {open && (
                <div style={{ textAlign: "center", marginTop: "100px" }}>
                    <ConfirmationModal 
                        isOpen={open} 
                        onClose={() => setOpen(false)}
                        onContractorSelect={handleContractorSelect}
                        index={index}
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

export default RequestInfo;