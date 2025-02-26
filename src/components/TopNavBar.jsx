import { useState } from 'react';
import { HomieIcon, DrawerOpenIcon } from "../lib/icons";
import DrawerContainer from '../components/DrawerContainer'
import RequestInfo from './RequestInfo';
import ConfirmationModal from '../components/ConfirmationModal';
import ConfirmationUpdateModal from '../components/ConfirmationUpdateModal';
import { useNavigate } from 'react-router-dom';
import { BotIcon } from 'lucide-react';

const TopNavBar = () => {
	const navigate = useNavigate();

	const [index, setIndex] = useState(0);
	const [drawerOpen, setDrawerOpen] = useState(true);
	const [open, setOpen] = useState(false);
	const [showConfirmationUpdate, setShowConfirmationUpdate] = useState(false);

	const handleContractorSelect = (contractor) => {
		setOpen(false); // Close the first modal
		setShowConfirmationUpdate(true); // Open the confirmation update modal
	};

	const handleOpenChatbot = () => {
		navigate('/chat');
	}

	return (
		<div>
			<div className="h-[48px] bg-homieBlue text-white flex flex-row items-center justify-between gap-2 z-50">
				<div className="flex flex-row items-center justify-start">
					<button
						onClick={() => setDrawerOpen(!drawerOpen)}
						className="ml-3"
					>
						<DrawerOpenIcon />
					</button>
					<div className={`flex flex-row gap-2 items-center ${drawerOpen && 'ml-[280px]'}`}>
						<HomieIcon />
						<span className="font-bold">
							ContractorConnect
						</span>
					</div>
					<DrawerContainer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} setIndex={setIndex} />
				</div>
				<div className="flex flex-row items-center justify-center mr-2">
					<button className="flex justify-center items-center border border-white rounded-full p-1"
					onClick={handleOpenChatbot}>
						<BotIcon />
					</button>
				</div>
			</div>

			<RequestInfo
				isOpen={drawerOpen}
				index={index}
				setModalOpen={setOpen} />


			{/* Remove this standalone ConfirmationModal as it's duplicated */}
			{/* <ConfirmationModal /> */}

			{open && (
				<div style={{ textAlign: "center", marginTop: "100px" }}>
					<ConfirmationModal
						isOpen={open}
						onClose={() => setOpen(false)}
						onContractorSelect={handleContractorSelect}
						index={index}
					/>
				</div>
			)}

			<ConfirmationUpdateModal
				isOpen={showConfirmationUpdate}
				onClose={() => setShowConfirmationUpdate(false)}
			/>
		</div>

	)
}

export default TopNavBar;