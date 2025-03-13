import { HomieIcon, DrawerOpenIcon } from "../lib/icons";
import { useNavigate } from "react-router-dom";
import DrawerContainer from '../components/DrawerContainer'


const TopNavBar = ({ drawerOpen, setDrawerOpen, setIndex }) => {

    const navigate = useNavigate();

    return (
        <div>
            <div className="h-[48px] bg-homieBlue text-white flex flex-row items-center gap-2 z-50">
                <button
                    onClick={() => setDrawerOpen(!drawerOpen)}
                    className="ml-3"
                >
                    {!drawerOpen && <DrawerOpenIcon />}
                </button>
                <div className={`flex flex-row gap-2 items-center cursor-pointer ${drawerOpen && 'ml-[290px]'}`}
                    onClick={() => navigate('/')}>
                    <HomieIcon />
                    <span className="font-bold">
                        ContractorConnect
                    </span>
                </div>
                <DrawerContainer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} setIndex={setIndex} />

            </div>
        </div>

    )
}

export default TopNavBar;