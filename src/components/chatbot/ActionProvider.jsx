import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children, state }) => {
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

	const handleSubmitForm = () => {
		const botMessage = createChatBotMessage(
			`Great! Feel free to ask me questions about this project.`
		);

		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
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
						// handleProjectTitle,
						// handlePropertyName,
						// handleWallNumber,
						// handleWallDimensions,
						handleSubmitForm,
						handleMessage,

					},
				});
			})}
		</div>
	);
};

export default ActionProvider;
