import { CustomIcon } from "../lib/icons";

const TopNavBar = () => {
    return (
        <div className="h-[48px] bg-homieBlue text-white flex flex-row items-center gap-2">
            <CustomIcon />
            <span className="font-bold">
                Homie
            </span>
        </div>
    )
}

export default TopNavBar;