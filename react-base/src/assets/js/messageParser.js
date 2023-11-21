// MessageParser starter code. Define responses in the actionProvider, and use messageParser to decide which message to activate.
class MessageParser {
	//a constructor is a special method that gets called when an object is created from a class. It is responsible for initializing the properties of the object, setting up any necessary state, and performing other setup tasks.

	//let name = Maya;
	//let age = 29;
	//const myObject = new MessageParser(name, age);
	//name and age are passed as parameters to the constructor (just as an easy example), which then, using the 'this' keyword, assigns this instance's properties to those passed parameters.

	constructor(actionProvider, state) {
		//assigns the values of the parameters passed to the constructor to the properties of the MessageParser instance. MessageParser now has access to the parameters, and it can call methods or access properties of this object throughout its methods.
		this.actionProvider = actionProvider;
		this.state = state;

		//makes the message handling more dynamic
		this.messageHandlers = {
			'hello world': 'helloWorldHandler',
			// Add more mappings as needed
		};
	}

	//user input
	parse(message) {
		//console.log(message);
		//console.log(this.state);
		const lowercase = message.toLowerCase();

		//checks the user input against the messageHandler to see if it matches any of the keys, and then pairs it with the value which is passed to the action Provider.
		for (const keyword in this.messageHandlers) {
			if (lowercase.includes(keyword)) {
				const handler = this.messageHandlers[keyword];
				this.actionProvider[handler]();
				break;
			}
		}
	}
}

export default MessageParser;
