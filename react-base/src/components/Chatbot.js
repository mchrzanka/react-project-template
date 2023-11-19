//chatbot
import { Chatbot } from 'react-chatbot-kit';
import MessageParser from '../assets/js/messageParser';
import ActionProvider from '../assets/js/actionProvider';
import config from '../assets/js/config';

import 'react-chatbot-kit/build/main.css';

const ChatBot = () => {
	return (
		<div>
			<Chatbot
				config={config}
				messageParser={MessageParser}
				actionProvider={ActionProvider}
			/>
			;
		</div>
	);
};

export default ChatBot;
