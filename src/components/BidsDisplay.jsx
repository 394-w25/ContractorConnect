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


    if(!jobRequest) {
        return (<p>Loading data</p>)
    }

    
    const contract_list = jobRequest.contractorName !== "None" ? 
                        Object.entries(contractors).filter(([id, contractor]) => id === jobRequest.contractorName) : 
                        Object.entries(contractors);

    const handleClick = () => {
        if(jobRequest.contractorName !== "None") {
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

            
            <div className="flex justify-between items-center mb-3">
                <p className="text-lg">Contractor Bids</p>
                
                <button 
                    className="bg-homieBlue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                    onClick={handleClick}
                >
                    {jobRequest.contractorName !== "None" ? "Cancel Selection" : "Find Someone"}
                </button>
            </div>
            
                        {/* Container for horizontal scrollable layout of cards */}
                        <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar">
                {contract_list.map(([id, contractor], idx) => {
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