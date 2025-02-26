import { useState } from 'react';
import BidsDisplay from './BidsDisplay';
import RequestInfoDetails from './RequestInfoDetails'
import ConfirmationModal from './ConfirmationModal';
import ConfirmationUpdateModal from './ConfirmationUpdateModal';

const RequestInfo = ({isOpen, index}) => {
    const leftMargin = isOpen ? "ml-[305px] " : "ml-0 ";
    const width = isOpen ?  "w" + (window.innerWidth - 305).toString() : "w-full";

    const [open, setOpen] = useState(false);
    const [showConfirmationUpdate, setShowConfirmationUpdate] = useState(false);

    const handleContractorSelect = (contractor) => {
        setOpen(false); // Close the first modal
        setShowConfirmationUpdate(true); // Open the confirmation update modal
    };

    return (
        <div>
            <div className={"grid grid-cols-3 bg-white " + leftMargin + width}>
                <div className="col-span-2">
                    <RequestInfoDetails index={index}/>
                </div>


                <div className="col-span-1">
                    <BidsDisplay setModalOpen={setOpen} 
                                index={index}/>
                </div>
            </div>


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
export default RequestInfo; 