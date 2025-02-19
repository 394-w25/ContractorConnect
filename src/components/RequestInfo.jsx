const RequestInfo = ({isOpen}) => {
    const leftMargin = isOpen ? "ml-[305px]" : "ml-0";
    return (
        <div className={"" + leftMargin}>
            <p>Bids</p>
        </div>
    )
}
export default RequestInfo; 