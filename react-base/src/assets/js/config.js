// Config starter code

//https://fredrikoseberg.github.io/react-chatbot-kit-docs/docs/advanced/configuration
//https://fredrikoseberg.github.io/react-chatbot-kit-docs/docs/advanced/widgets
//https://www.youtube.com/watch?v=YGXXITnXvYU

import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from '../../components/chatbot/BotAvatar';

//create a config object with key value pairs that represent a specific configuration option for the chatbot.
const config = {
	initialMessages: [
		createChatBotMessage(`Hey! What can I help you with?`, {
			widget: 'todos',
		}),
	],
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
};

export default config;
