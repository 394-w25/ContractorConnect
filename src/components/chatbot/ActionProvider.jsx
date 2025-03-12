import React from 'react';
import { useDbUpdate } from '../../utilities/firebase';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { userContext } from '../Dispatcher';


const ActionProvider = ({ createChatBotMessage, setState, children, state }) => {
	const requestId = uuidv4();

	const user = useContext(userContext);
	const [updateRequestsDb] = useDbUpdate(`requests/${requestId}`); // Firebase database reference
	const [updateUserDb] = useDbUpdate(`homeowners/${user.uid}/requests/${requestId}`);


	const setProjectTitle = (val) => {
		setState((prev) => ({
			...prev,
			projectTitle: val
		}));
	}

	const setAddress = (val) => {
		setState((prev) => ({
			...prev,
			address: val
		}));
	}

	const setNoOfWalls = (val) => {
		setState((prev) => ({
			...prev,
			noOfWalls: val
		}));
	}

	const handleDimChange = (idx, dim, val) => {
		const newDimensions = [...state.dimensions];
		newDimensions[idx][dim] = val;
		setState((prev) => ({
			...prev,
			dimensions: newDimensions
		}));
	}

	const handleDimAdd = () => {
		const newDimensions = [...state.dimensions];
		newDimensions.push([0, 24]);
		setState((prev) => ({
			...prev,
			dimensions: newDimensions
		}));
	}

	const handleDimDel = (idx) => {
		setState((prev) => ({
			...prev,
			dimensions: state.dimensions.filter((_, i) => i !== idx)
		}));
	}

	const handleImageUpload = (imageUrl) => {
		setState((prev) => ({
			...prev,
			uploadedImageUrl: imageUrl
		}));

		const botMessage = createChatBotMessage("Nice! Here is your uploaded image.",
			{
				widget: 'imageDisplayWidget'
			}
		);

		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));

	}

	const handleSubmitForm = () => {
		const botMessage = createChatBotMessage(
			`Great! Feel free to ask me questions about this project.`
		);

		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));

		const newRequest = {
			desc: `Painting project for ${state.address}`,
			email: user.email, // You’ll need to get this from somewhere
			name: state.projectTitle || state.address || "New Project",

			sqft: 0, // Calculate from wall dimensions if available

		};

		updateRequestsDb(newRequest);
	};

	const handleMessage = (message) => {
		if (!state.projectTitle || !state.address || state.noOfWalls === 0) {
			const botMessage = createChatBotMessage(
				'I do not have enough information to generate a quote. Please enter your project information first.'
			);

			setState((prev) => ({
				...prev,
				messages: [...prev.messages, botMessage],
			}));

			return;
		}
	}


	// const displayProjectInfo = () => {
	// 	setState((prev) => {
	// 		const projectData = prev.projectData;

	// 		if (!projectData.walls || projectData.walls.length === 0) {
	// 			const botMessage = createChatBotMessage(
	// 				`Project "${projectData.title}" has been created, but no wall dimensions have been added yet.`
	// 			);
	// 			return {
	// 				...prev,
	// 				messages: [...prev.messages, botMessage],
	// 			};
	// 		}

	// 		const wallDimensionsText = projectData.walls.map((wall, index) => {
	// 			return `Wall ${index + 1}: ${wall.width}x${wall.height} ${wall.unit}`;
	// 		}).join(', ');

	// 		const botMessage = createChatBotMessage(
	// 			`Great! Here's a summary of your project "${projectData.title}":
	//     • Property name: ${projectData.propertyName}
	//     • Number of walls: ${projectData.wallCount}
	//     • Wall dimensions: ${wallDimensionsText}`
	// 		);


	// 		// Create a new request object that matches your DB schema


	// 		// Update homeowner's requests list in Firebase
	// 		updateUserDb({ 'test': true }); // Use true as a placeholder value

	// 		return {
	// 			...prev,
	// 			messages: [...prev.messages, botMessage],
	// 		};
	// 	});
	// };


	return (
		<div>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					actions: {
						handleDimChange,
						setProjectTitle,
						setAddress,
						setNoOfWalls,
						handleDimAdd,
						handleDimDel,
						handleSubmitForm,
						handleMessage,
						handleImageUpload
					},
				});
			})}
		</div>
	);
};

export default ActionProvider;
