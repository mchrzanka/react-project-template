// ActionProvider starter code
class ActionProvider {
	constructor(
		createChatBotMessage,
		setStateFunc,
		createClientMessage,
		stateRef,
		createCustomMessage,
		...rest
	) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
		this.createClientMessage = createClientMessage;
		this.stateRef = stateRef;
		this.createCustomMessage = createCustomMessage;
	}

	helloWorldHandler = () => {
		const message = this.createChatBotMessage(
			"Hello, I'm not self aware luckily!"
		);
		this.setChatbotMessage(message);
	};

	setChatbotMessage = (message) => {
		//react automatically passes the current state of the component when this.setState is used.
		this.setState((state) => ({
			//creates a shallow copy of arrays or objects and duplicates it so that the original state is not overwritten, but rather we use this new shallow state.
			//let newState = {...state};
			//^ creates a new distinct object in memory, which is different from doing
			//let newState = state
			//^ which just creates a reference to the same object, meaning if you modify newState, you'll also modify state
			...state,
			//creates a new array and assigns it to the "messages" property of the new state object. '...state.messages' spreads the elements of the existing state.messages array into the new array, and then the new 'message' is appended to the end of the array.
			messages: [...state.messages, message],
		}));
	};
}

export default ActionProvider;
