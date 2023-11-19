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
	}

	//user input
	parse(message) {
		//console.log(message);
		//console.log(this.state);
		const lowercase = message.toLowerCase();

		if (lowercase.includes('hello world')) {
			this.actionProvider.helloWorldHandler();
		}
	}
}

export default MessageParser;
