import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import { DrawerCloseIcon } from "../lib/icons";
import DrawerCard from './DrawerCard';
import ContractorCard from './ContractorCard';
import { contractors } from '../utilities/data';
import { useDbData } from '../utilities/firebase';
import { userContext } from './Dispatcher';

const DrawerContainer = ({ drawerOpen, setDrawerOpen, setIndex }) => {
    const user = useContext(userContext);
    const navigate = useNavigate(); 
    const [data, error] = useDbData(`requests`);
    console.log(data)

    if(!data) {
        return (<p>loading data</p>)
    }

    const requests = Object.entries(data).filter(([id, requests]) => requests.email === user.email);

    console.log(requests);


    const handleClick = (id) => {
        navigate(`requests/${id}`);
    }

    const activeProjects = requests.filter(([id, request]) => request.contractorName !== 'None')
    const activeRequests = requests.filter(([id, request]) => request.contractorName === 'None' ) 
    let activeContractors = []
    for(let i = 0; i < activeProjects.length; i++) {
        const [id, request] = activeProjects[i];
        const contractorName = request.contractorName;
        console.log(contractors)
        console.log(contractorName)
        if(contractorName !== "None" && !activeContractors.includes(contractorName)) {
            activeContractors.push(contractorName)
        }
    }

    const noProjects = Object.entries(activeRequests).length == 0 && Object.entries(activeProjects).length == 0

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
            <div>
              {noProjects ? (
                <div className="mt-[300px] flex items-center justify-center h-full">
                    <div className="font-[700] text-3xl text-gray-500 font-large text-center">
                        <div>No created</div>
                        <div>projects</div>
                    </div>
                </div>
              ) : (
                  <div className="w-full mt-[48px]">
                      {(activeProjects && Object.entries(activeProjects).length > 0) && 
                          <div className="flex flex-col gap-2 items-center p-4">
                              <span className="font-bold w-full text-start">
                                  Active Projects
                              </span>
                              {activeProjects.map(([id, request]) => (
                                  <DrawerCard
                                      key={id}
                                      width={'100%'}
                                      height={51}
                                      imgUrl={request.imgUrl}
                                      name={request.name}
                                      handleClick = {() => handleClick(id)}
                                  />
                              ))}
                          </div>
                      }
                      {(activeRequests) && 
                          <div className="flex flex-col gap-2 items-center p-4">
                              <span className="font-bold w-full text-start">
                                  Requests
                              </span>
                              {activeRequests.map(([id, request]) => (
                                  <DrawerCard
                                      key={id}
                                      width={'100%'}
                                      height={51}
                                      imgUrl={request.imgUrl}
                                      name={request.name}
                                      handleClick = {() => handleClick(id)}
                                  />
                              ))}
                          </div>
                      }
                      {(activeContractors.length > 0) &&
                          <div className="flex flex-col gap-2 items-center p-4">
                              <span className="font-bold w-full text-start">
                                  Contractors
                              </span>
                              {activeContractors.map(name => (
                                  <ContractorCard
                                      key={name}
                                      name={contractors[name].name}
                                      quote={contractors[name].quote}
                                      imgUrl={contractors[name].logo}
                                      height={51}
                                      width={'100%'}
                                      needsQuote={false}
                                  />
                              ))}
                          </div>
                      }
                  </div>
              )}
            </div>
        </Drawer>
      )
}

export default DrawerContainer;