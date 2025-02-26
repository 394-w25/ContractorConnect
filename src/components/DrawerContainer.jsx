import { useContext } from 'react';
import Drawer from '@mui/material/Drawer';
import { DrawerCloseIcon } from "../lib/icons";
import DrawerCard from './DrawerCard';
import ContractorCard from './ContractorCard';
import { contractors } from '../utilities/data';
import { jobRequestContext } from './Dispatcher';


const DrawerContainer = ({ drawerOpen, setDrawerOpen, setIndex }) => {

    const handleClick = (index) => {
        setIndex(index)
    }

    const { jobReqs } = useContext(jobRequestContext);


    const activeProjects = Object.entries(jobReqs).filter(([index, request]) => request.contractorName !== null)
    const activeRequests = Object.entries(jobReqs).filter(([index, request]) => request.contractorName === null ) 

    console.log(activeProjects)

    return (
        <Drawer
            sx={{
                width: 305,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 305,
                    boxSizing: 'border-box',
                },
                position: 'relative'
            }}
            variant="persistent"
            anchor="left"
            className=""
            open={drawerOpen}
        >
            <div className="w-[305px] h-[48px] bg-homieBlue flex flex-row items-center fixed top-0 left-0 z-50">
                <button
                    onClick={() => setDrawerOpen(!drawerOpen)}
                    className="ml-3"
                >
                    <DrawerCloseIcon />
                </button>
            </div>
            <div className="w-full mt-[48px]">
            {(activeProjects && Object.entries(activeProjects).length > 0) && 
                <div className="flex flex-col gap-2 items-center p-4">
                    <span className="font-bold w-full text-start">
                        Active Projects
                    </span>
                    {activeProjects.map(rq => (
                        <DrawerCard
                            key={rq[0]}
                            width={'100%'}
                            height={51}
                            img={rq[1].img}
                            name={rq[1].name}
                            handleClick = {() => handleClick(rq[0])}
                        />

                    ))}
                </div>
            }
            {(activeRequests && Object.entries(activeRequests).length > 0) && 
                <div className="flex flex-col gap-2 items-center p-4">
                    <span className="font-bold w-full text-start">
                        Requests
                    </span>
                    {activeRequests.map(rq => (
                        <DrawerCard
                            key={rq[0]}
                            width={'100%'}
                            height={51}
                            img={rq[1].img}
                            name={rq[1].name}
                            handleClick = {() => handleClick(rq[0])}
                        />

                    ))}
                </div>
            }
            {(contractors && Object.entries(contractors).length > 0) &&
                <div className="flex flex-col gap-2 items-center p-4">
                    <span className="font-bold w-full text-start">
                        Contractors
                    </span>
                    {Object.entries(contractors).map((ct, idx) => (
                        // name, quote, imgUrl, height, width
                        <ContractorCard
                            key={idx}
                            name={ct[1].name}
                            quote={ct[1].quote}
                            imgUrl={ct[1].img}
                            height={51}
                            width={'100%'}
                            needsQuote={false}
                        />
                    ))}
                </div>
            }
            </div>
        </Drawer>
    )
}

export default DrawerContainer;