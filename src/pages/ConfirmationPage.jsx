
import { HomieIcon } from '../lib/icons';

const ConfirmationPage = ({ isDrawerOpen }) => {
    const width = isDrawerOpen ?  "w" + (window.innerWidth - 305).toString() : "w-full";
    const leftMargin = isDrawerOpen ? "ml-[305px] " : "ml-0 ";


    return (
        <div className={leftMargin + width + " flex flex-col justify-center items-center pt-44"}>
            <HomieIcon width={200} height={200} />

            <h2 className="font-bold text-2xl mt-3"> Confirmed </h2>
            <p className="text-xl mt-3"> 
                We have sent your information to our contractors!
            </p>
            <p className="text-xl">
                Contractors will respond to you shortly with their individual estimate! 
            </p>

        </div>
    )



}

export default ConfirmationPage; 