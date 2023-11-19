// Config starter code

//https://fredrikoseberg.github.io/react-chatbot-kit-docs/docs/advanced/configuration

import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from '../../components/BotAvatar';

//create a config object with key value pairs that represent a specific configuration option for the chatbot.
const config = {
	initialMessages: [createChatBotMessage(`Hey! What can I help you with?`)],
	botName: 'Botty',
	customStyles: {
		botMessageBox: {
			backgroundColor: '#000',
		},
		chatButton: {
			backgroundColor: '#aaa',
		},
	},
	customComponents: {
		// Replaces the default bot avatar with the component I made
		botAvatar: (props) => <BotAvatar {...props} />,
	},
	// state: {
	// 	movieTitles: ['LOTR', 'Harry Potter'],
	// },
};

export default config;
