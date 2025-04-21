// Create the pet object
const pet = {
name: Abel,
species: Dog,
happiness: 50,


// Methods:

    /** 
     * play()
     * Increases the pet's happiness and returns a message.
     * @returns {string} - A message indicating the pet's updated happiness.
     */

    play: function() {
        this.happiness += 10; // Increase happiness by 10
        return `You played with ${this.name}! Happiness is now ${this.happiness}.`;
    },

    /**
     * feed()
     * Increases the pet's happiness and returns a message.
     * @returns {string} - A message indicating the pet's updated happiness.
     */

    feed: function() {
        this.happiness += 20; // Increase happiness by 20
        return `You fed ${this.name}! Happiness is now ${this.happiness}.`;
    },

    /**
     * status()
     * Prints the pet's current status (name, species, happiness) to the console.
     * @returns {void}
     */

    status: function() {
        console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}.`);
    },

    /**
     * rename()
     * Updates the pet's name with a new name. (Bonus Task)
     * @param {string} newName - The new name for the pet.
     * @returns {string} - A message indicating the pet's new name.
     */
    
    rename: function(newName) {
        this.name = newName; // Update the pet's name
        return `Your pet's new name is ${this.name}!`;
    }
};

// Implement and Test:

// Log the initial status of the pet
console.log("Initial Pet Status:");
pet.status(); // Output: Pet Name: Abel, Species: Dog, Happiness: 50

// Log the message returned by the play() method
console.log("\nPlay Method:");
console.log(pet.play()); // Output: You played with Abel! Happiness is now 60

// Log the updated status after calling play()
console.log("\nStatus after play():");
pet.status(); // Output: Pet Name: Abel, Species: Dog, Happiness: 60

// Log the message returned by the feed() method
console.log("\nFeed Method:");
console.log(pet.feed()); // Output: You fed Abel! Happiness is now 80

// Log the updated status after calling feed()
console.log("\nStatus after feed():");
pet.status(); // Output: Pet Name: Abel, Species: Dog, Happiness: 80

// Bonus Task: Rename the pet and log the new status
console.log("\nBonus Task - Rename:");
console.log(pet.rename('Sparky'));
pet.status(); // Output: Pet Name: Sparky, Species: Dog, Happiness: 80



