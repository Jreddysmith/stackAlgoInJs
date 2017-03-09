function Stack() {
	this.dataStore = [];
	this.size = 0;
}

Stack.prototype.push = function(data) {
	// increases the size of our storage
	var size = this.size++;


	// assigns size as a key of storage
    // assigns data as the value of this key
	this.dataStore[size] = data
};

Stack.prototype.pop = function() {
	var size = this.size, deletedData;

	if (size) {
	deletedData = this.dataStore[size];

	delete this.dataStore[size];
	this.size--;

	return deletedData;
	}
}



var stack = new Stack();
stack.push("Bulbasaur");
stack.push("Charmander");
stack.push("Squirtle");

console.log("Taking out Squirtle");
stack.pop();

console.log("Adding Pikachu");
stack.push("Pikachu");

console.log(stack);
