import RequestInfo from '../components/RequestInfo.jsx';


const RequestPage = ({index, isDrawerOpen}) => {
    const width = isDrawerOpen ?  "w" + (window.innerWidth - 305).toString() : "w-full";
    const leftMargin = isDrawerOpen ? "ml-[305px] " : "ml-0 ";


    return (
        <div className={"flex flex-col bg-gray-200 " + leftMargin + width}>
            <RequestInfo index={index} isDrawerOpen={isDrawerOpen} />
        </div>
    );
};

export default RequestPage;