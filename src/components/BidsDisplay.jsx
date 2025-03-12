import { useContext, useState } from 'react'; 
import { contractors } from "../utilities/data";
import { idContext } from '../pages/RequestPage';
import ContractorBidCard from "./ContractorBidCard";
import { useDbData, useDbUpdate } from '../utilities/firebase';

const BidsDisplay = ({setModalOpen }) => {
    
    const id = useContext(idContext);
    const [jobRequest, error] = useDbData(`requests/${id}`)
    const [update, result] = useDbUpdate(`requests/${id}`)

    // State to track which contractor cards are expanded
    const [expandedCards, setExpandedCards] = useState({});
    
    const contract_list = jobRequest.contractorName ? 
                        Object.values(contractors).filter((contractor) => contractor.name === jobRequest.contractorName) : 
                        Object.values(contractors);

    const handleClick = () => {
        if(jobRequest.contractorName !== "None") {
            console.log('asdfdsafsadf');
            update({... jobRequest, 'contractorName' : "None" })
        }
        else {
            setModalOpen(true);
        }
    };
    
    // Toggle expanded state for a specific contractor card
    const toggleCardExpansion = (contractorId) => {
        setExpandedCards(prev => ({
            ...prev,
            [contractorId]: !prev[contractorId]
        }));
    };
    
    return (
        <div className="p-6">
            <div className="flex justify-between mb-2">
                {/*<p className="text-2xl">Bids</p>*/}

            </div>
            
         {/*  <div className="flex justify-between items-center mb-4">
                <p>Our estimated cost:</p>
                <div className="border-2 border-homieBlue p-2 rounded-md text-homieBlue"> $350.00 </div>
            </div> */}

<div className="flex justify-between items-center mb-3">
                <p className="text-lg">Contractor Bids</p>
                
                <button 
                    className="bg-homieBlue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                    onClick={handleClick}
                >
                    {jobRequest.contractorName !== null ? "Cancel Selection" : "Find Someone"}
                </button>
            </div>
            
                        {/* Container for horizontal scrollable layout of cards */}
                        <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar">
                {contract_list.map((contractor, idx) => {
                    const isExpanded = expandedCards[contractor.id] || expandedCards[idx];
                    
                    return (
                        <div 
                            key={idx} 
                            onClick={() => toggleCardExpansion(contractor.id || idx)}
                            className="flex-shrink-0"
                        >
                            {isExpanded ? (
                                <ContractorBidCard
                                    name={contractor.name} 
                                    quote={contractor.quote} 
                                    imgUrl={contractor.logo} 
                                    width={'220px'} 
                                    height={'30'} 
                                    needsQuote={true}
                                />
                            ) : (
                                <ContractorBidCard
                                    name={contractor.name} 
                                    quote={contractor.quote} 
                                    imgUrl={contractor.logo} 
                                    width={'220px'} 
                                    height={'40'} 
                                    needsQuote={true}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BidsDisplay;