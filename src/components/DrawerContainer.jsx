import Drawer from '@mui/material/Drawer';
import { DrawerCloseIcon } from "../lib/icons";

const DrawerContainer = ({ drawerOpen, setDrawerOpen }) => {

    return (
        <Drawer
            sx={{
                width: 305,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 305,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            className=""
            open={drawerOpen}
        >
            <div className="w-full h-[48px] bg-homieBlue flex flex-row items-center">
                <button
                    onClick={() => setDrawerOpen(!drawerOpen)}
                    className="ml-3"    
                >
                    <DrawerCloseIcon />
                </button>
            </div>

        </Drawer>
    )
}

export default DrawerContainer;