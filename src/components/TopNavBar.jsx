import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { CustomIcon } from "../lib/icons";


const TopNavBar = () => {

    const [drawerOpen, setDrawerOpen] = useState(true);

    return (
        <div className="h-[48px] bg-homieBlue text-white flex flex-row items-center gap-2">
            <CustomIcon />
            <span className="font-bold">
                Homie
            </span>
            <Drawer
                // sx={{
                //     width: drawerWidth,
                //     flexShrink: 0,
                //     '& .MuiDrawer-paper': {
                //         width: drawerWidth,
                //         boxSizing: 'border-box',
                //     },
                // }}
                variant="persistent"
                anchor="left"
                className="bg-black"
                open={drawerOpen}
            >
                <button >
                    <DrawerIcon />
                </button>

            </Drawer>
        </div>
    )
}

export default TopNavBar;