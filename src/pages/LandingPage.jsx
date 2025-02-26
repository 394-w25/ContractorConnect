import { signInWithGoogle } from '../utilities/firebase';
import { HomieIcon } from '../lib/icons';


const LandingPage = () => {


    return (
        <div className="flex flex-col h-screen justify-center items-center bg-homieBlue gap-y-6">

                <HomieIcon width={200} height={200} />
                <button className="border-2 border-white text-white text-3xl rounded-md p-2 hover:scale-110 transition-all"
                        onClick={signInWithGoogle}
                >
                    Sign In
                </button>
        

        </div>
    )
}


export default LandingPage; 