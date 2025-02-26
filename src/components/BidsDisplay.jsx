import { useContext } from 'react'; 
import { jobRequestContext } from './Dispatcher';
import { contractors } from "../utilities/data";
import ContractorCard from "./ContractorCard";

const BidsDisplay = ({setModalOpen, index}) => {
    
    const {jobReqs, setJobReqs} = useContext(jobRequestContext);
    let jobRequest = jobReqs[index]

    const contract_list = jobRequest.contractorName ? 
                        Object.values(contractors).filter((contractor) => contractor.name === jobRequest.contractorName) : 
                        Object.values(contractors) 

    const handleClick = () => {
        if(jobRequest.contractorName !== null) {
            jobRequest.contractorName = null 
            console.log('asdfdsafsadf')
            setJobReqs((prev) => {
                return {...prev, [index] : jobRequest}
            })
        }
        else {
            setModalOpen(true)
        }

    }
    
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
            {contract_list.map((contractor, idx) => <ContractorCard 
                                                    key={idx}
                                                    name={contractor.name} 
                                                    quote={contractor.quote} 
                                                    imgUrl={contractor.img} 
                                                    width={'75%'} 
                                                    height={'30'} 
                                                    needsQuote={true} />)}

        </div>
       
    )
}

export default BidsDisplay;