import { useContext, useState } from 'react'; 
import { jobRequestContext } from './Dispatcher';
import { contractors } from "../utilities/data";
import ContractorCard from "./ContractorCard";
import ContractorBidCard from "./ContractorBidCard";

const BidsDisplay = ({setModalOpen, index}) => {
    const {jobReqs, setJobReqs} = useContext(jobRequestContext);
    let jobRequest = jobReqs[index];
    
    // State to track which contractor cards are expanded
    const [expandedCards, setExpandedCards] = useState({});
    
    const contract_list = jobRequest.contractorName ? 
                        Object.values(contractors).filter((contractor) => contractor.name === jobRequest.contractorName) : 
                        Object.values(contractors);

    const handleClick = () => {
        if(jobRequest.contractorName !== null) {
            jobRequest.contractorName = null;
            console.log('asdfdsafsadf');
            setJobReqs((prev) => {
                return {...prev, [index] : jobRequest};
            });
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
        <div className="flex flex-col p-3 gap-y-2">
            <div className="flex justify-between mb-2">
                <p className="text-2xl">Bids</p>

                <div>
                    <label className="text-black">
                        Find Someone?
                        <input
                        type="checkbox"
                        className="ml-2 border-2 border-homieBlue focus:border-homieBlue scale-150"
                        checked={jobRequest.contractorName !== null}
                        onClick={handleClick}
                        />
                    </label>
                </div>
            </div>
            
            <div className="flex justify-between items-center">
                <p>Our estimated cost:</p>
                <div className="border-2 border-homieBlue p-2 rounded-md text-homieBlue"> $350.00 </div>
            </div>

            <p className="text-lg">Contractors</p>
            
            {contract_list.map((contractor, idx) => {
                const isExpanded = expandedCards[contractor.id] || expandedCards[idx];
                
                return (
                    <div key={idx} onClick={() => toggleCardExpansion(contractor.id || idx)}>
                        {isExpanded ? (
                            <ContractorBidCard
                                name={contractor.name} 
                                quote={contractor.quote} 
                                imgUrl={contractor.logo} 
                                width={'75%'} 
                                height={'30'} 
                                needsQuote={true}
                            />
                        ) : (
                            <ContractorCard
                                name={contractor.name} 
                                quote={contractor.quote} 
                                imgUrl={contractor.logo} 
                                width={'75%'} 
                                height={'20'} 
                                needsQuote={true}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default BidsDisplay;