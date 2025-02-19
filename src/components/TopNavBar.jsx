import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { HomieIcon, DrawerOpenIcon } from "../lib/icons";
import DrawerContainer from '../components/DrawerContainer'

const TopNavBar = () => {

    const [drawerOpen, setDrawerOpen] = useState(true);

    return (
        <div className="h-[48px] bg-homieBlue text-white flex flex-row items-center gap-2">
            <button 
                onClick={() => setDrawerOpen(!drawerOpen)}
                className="ml-3"
            >
                <DrawerOpenIcon />
            </button>
            <div className={`flex flex-row gap-2 items-center ${drawerOpen && 'ml-[280px]'}`}>
                <HomieIcon />
                <span className="font-bold">
                    Homie
                </span>
            </div>
            <DrawerContainer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

        </div>
    )
}

export default TopNavBar;