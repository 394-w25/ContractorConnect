import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InitialWidget from './InitialWidget';
import ImageDisplayWidget from './ImageDisplayWidget';

const config = {

	initialMessages: [
		createChatBotMessage("Hi! I'm Homie, your paint project assistant. Please enter the information needed to generate a quote.",
			{
				widget: 'initialWidget'
			}
		),
	],
	state: {
		projectData: {},
		projectTitle: '',
		address: '',
		noOfWalls: 0,
		dimensions: [[0, 0]],
		uploadedImageUrl: ''
	},
	customComponents: {
		header: () => (
			<div
				style={{
					backgroundColor: 'white',
					fontWeight: 'bold',
					fontSize: 'larger',
					borderBottom: '1px solid #E0E0E0',
					padding: "10px",
					display: 'flex',
					alignItems: 'center',
					gap: '8px'
				}}
				className="font-bold w-full text-start"
			>
				<HomeOutlinedIcon style={{ color: '#007BFF' }} />
				Homie Paint Project Assistant
			</div>
		),
	},
	widgets: [
		{
			widgetName: 'initialWidget',
			widgetFunc: (props) => <InitialWidget {...props} />,
			mapStateToProps: ['projectData', 'address', 'noOfWalls', 'dimensions']
		},
		{
			widgetName: 'imageDisplayWidget',
			widgetFunc: (props) => <ImageDisplayWidget {...props} />,
			mapStateToProps: ['uploadedImageUrl']
		},
	],
};

export default config;