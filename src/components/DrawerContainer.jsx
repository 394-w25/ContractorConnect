import Drawer from '@mui/material/Drawer';
import { DrawerCloseIcon } from "../lib/icons";
import ActionAreaCard from './DrawerCard';
import ContractorCard from './ContractorCard';
import { contractors } from '../utilities/data'
import Box from '@mui/material/Box';


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
            {/* <ActionAreaCard /> */}
            {(contractors && Object.entries(contractors).length > 0) &&
                <div className="flex flex-col gap-2 items-center">


                    <span className="font-bold w-full text-start pl-4">
                        Contractors
                    </span>
                    {Object.entries(contractors).map((ct, idx) => (
                        // name, quote, imgUrl, height, width
                        <ContractorCard
                            name={ct[1].name}
                            quote={ct[1].quote}
                            imgUrl={ct[1].img}
                            height={51}
                            width={150}
                        />
                    ))}
                </div>
            }
        </Drawer>
    )
}

export default DrawerContainer;