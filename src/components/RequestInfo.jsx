import BidsDisplay from './BidsDisplay';
import RequestInfoDetails from './RequestInfoDetails'

const RequestInfo = ({isOpen, index, modalOpen, setModalOpen}) => {
    const leftMargin = isOpen ? "ml-[305px] " : "ml-0 ";
    const width = isOpen ?  "w" + (window.innerWidth - 305).toString() : "w-full";

    return (
        <div className={"grid grid-cols-3 bg-white " + leftMargin + width}>
            <div className="col-span-2">
                <RequestInfoDetails index={index}/>
            </div>


            <div className="col-span-1">
                <BidsDisplay setModalOpen={setModalOpen} 
                             modalOpen={modalOpen}/>
            </div>
        </div>
    )
}
export default RequestInfo; 