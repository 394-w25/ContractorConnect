import React, { useState } from "react";
import TopNavBar from '../components/TopNavBar';
import ConfirmationModal from '../components/ConfirmationModal';
import { Button } from "@mui/material";


const RequestPage = () => {

    const [open, setOpen] = useState(false);
    console.log(open);

    return (
        <div className="flex flex-col w-full h-full bg-gray-200">
            <TopNavBar modalOpen = {open}
                       setModalOpen={setOpen}/>
            <ConfirmationModal />
            {open &&
                <div style={{ textAlign: "center", marginTop: "100px" }}>
                    <ConfirmationModal isOpen={open} onClose={() => setOpen(false)} />
                </div>
            }

        </div>
    )
}

export default RequestPage;