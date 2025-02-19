import React, { useState } from "react";
import TopNavBar from '../components/TopNavBar';
import ConfirmationModal from '../components/ConfirmationModal';
import { Button } from "@mui/material";


const RequestPage = () => {

    // const [drawerOpen, setDrawerOpen] = useState(true);
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col w-full h-full bg-gray-200">
            <TopNavBar />
            <ConfirmationModal />
            <div style={{ textAlign: "center", marginTop: "100px" }}>
                <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
                    Open Modal
                </Button>

                <ConfirmationModal isOpen={open} onClose={() => setOpen(false)} />
            </div>

        </div>
    )
}

export default RequestPage;