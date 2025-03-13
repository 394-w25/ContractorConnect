import React, { useRef } from 'react';
import { Image } from 'lucide-react'; // This is your Lucide icon
import { uploadImage } from '../../utilities/firebase'

const ImageWidget = (props) => {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        console.log('hi')
        if (file) {
            try {
                const timestamp = Date.now();
                const fileName = `image-${timestamp}-${file.name}`;
                const path = `uploads/${fileName}`;
                const downloadURL = await uploadImage(file, path);


                // const downloadURL = await uploadImage(file, path);
                // console.log('Download URL:', downloadURL);
                props.actions.handleImageUpload(downloadURL);
                // You can now use downloadURL however you like
            } catch (error) {
                console.error('Upload failed:', error);
            }
        }
    };



    return (
        <>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
            />

            <button
                className="absolute left-2 bottom-[4.5rem] w-12 h-12 border border-gray-600 z-[200] flex shadow-md
        justify-center items-center bg-white rounded-full hover:bg-gray-100 transition duration-200 ease-in-out"
                onClick={handleButtonClick}
            >
                <Image className="w-6 h-6" />
            </button>
        </>
    );
}

export default ImageWidget;