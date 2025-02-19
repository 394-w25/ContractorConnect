import Drawer from '@mui/material/Drawer';


const RequestPage = () => {

    return (
        <div className="flex flex-row w-full h-full bg-gray-200">
            hi
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
            ></Drawer>
        </div>
    )
}

export default RequestPage;