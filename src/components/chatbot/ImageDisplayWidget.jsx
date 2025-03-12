const ImageDisplayWidget = (props) => {
    return (
        <div className="w-full flex flex-col justify-center items-center ">
            <img
                className="w-1/2" 
                src={props.uploadedImageUrl}
            />
        </div>
    )
}

export default ImageDisplayWidget;