import TopNavBar from '../components/TopNavBar';


const RequestPage = () => {

    // const [drawerOpen, setDrawerOpen] = useState(true);

    return (
        <div className="flex flex-col w-full h-full bg-gray-200">
            <TopNavBar />

            {/* <Drawer
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
                <button>
                    <DrawerIcon />
                </button>

            </Drawer> */}
        </div>
    )
}

export default RequestPage;