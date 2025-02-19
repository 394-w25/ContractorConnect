import Drawer from '@mui/material/Drawer';
import TopNavBar from '../components/TopNavBar';
import {useState} from 'react';

const RequestPage = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div className="flex flex-col w-full h-full bg-gray-200">
            <TopNavBar />

            <Drawer
                // sx={{
                //     width: drawerWidth,
                //     flexShrink: 0,
                //     '& .MuiDrawer-paper': {
                //         width: drawerWidth,
                //         boxSizing: 'border-box',
                //     },
                // }}
                variant="permanent"
                anchor="left"
                className="bg-black"
                open={drawerOpen}
            ></Drawer>
        </div>
    )
}

export default RequestPage;