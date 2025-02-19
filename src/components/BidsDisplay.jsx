import { contractors } from "../utilities/data";
import ContractorCard from "./ContractorCard";

const BidsDisplay = () => {
    return (

        <div className="flex flex-col p-3 gap-y-2">
            <p className="text-2xl">Bids</p>

            <div className="flex justify-between items-center">
                <p>Our estimated cost:</p>
                
                <div className="border-2 border-homieBlue p-2 rounded-md text-homieBlue"> $350.00 </div>
            
            </div>

            <p className="text-lg">Contractors</p>
            {Object.values(contractors).map((contractor) => <ContractorCard 
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