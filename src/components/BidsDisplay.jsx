import { contractors,jobRequests } from "../utilities/data";
import ContractorCard from "./ContractorCard";

const BidsDisplay = ({setModalOpen, modalOpen, index}) => {
    index = jobRequests[index].contractorIndex
    console.log('index')
    console.log(index)
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
                        checked={modalOpen}
                        onClick={() => setModalOpen(true)}
                        />
                    </label>
                </div>
            </div>
            

            <div className="flex justify-between items-center">
                <p>Our estimated cost:</p>
                
                <div className="border-2 border-homieBlue p-2 rounded-md text-homieBlue"> $350.00 </div>
            
            </div>

            <p className="text-lg">Contractors</p>

            {index === -1 ? 
                Object.values(contractors).map((contractor, idx) => (
                    <ContractorCard 
                    key={idx}
                    name={contractor.name} 
                    quote={contractor.quote} 
                    imgUrl={contractor.img} 
                    width={'75%'} 
                    height={'30'} 
                    needsQuote={true} 
                    />
                )) 
                : 
                // <ContractorCard 
                //     key={index}
                //     name={contractors[index].name} 
                //     quote={contractors[index].quote} 
                //     imgUrl={contractors[index].img} 
                //     width={'75%'} 
                //     height={'30'} 
                //     needsQuote={true} 
                //     />
                // <p>placeholder</p>
                Object.values(contractors)[index] ? (
                    <ContractorCard 
                        key={index}
                        name={Object.values(contractors)[index].name} 
                        quote={Object.values(contractors)[index].quote} 
                        imgUrl={Object.values(contractors)[index].img} 
                        width={'75%'} 
                        height={'30'} 
                        needsQuote={true} 
                    />
                ) : (
                    <p>No contractor found</p>
                )

                }
            {/* {Object.values(contractors).map((contractor, idx) => <ContractorCard 
                                                    key={idx}
                                                    name={contractor.name} 
                                                    quote={contractor.quote} 
                                                    imgUrl={contractor.img} 
                                                    width={'75%'} 
                                                    height={'30'} 
                                                    needsQuote={true} />)} */}

        </div>
       
    )
}

export default BidsDisplay;