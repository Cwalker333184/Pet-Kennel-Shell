// Factory function to create pet objects
function createPet(name, species) {
    const pet = {
        name: name,        // String: Pet's name (passed as argument)
        species: species,  // String: Pet's species (passed as argument)
        happiness: 50,     // Number: Initial happiness
        energy: 100,       // Number: Initial energy

        play: function() {
            this.energy -= 20;
            this.happiness += 10;
            return `You played with ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;
        },

        feed: function() {
            this.happiness += 20;
            this.energy += 20;
            return `You fed ${this.name}! Happiness is now ${this.happiness}, and energy is now ${this.energy}.`;
        },

        status: function() {
            console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}.`);
        },

        rest: function() {
            this.energy = 100;
            return `${this.name} has rested. Energy is now fully restored to ${this.energy}.`;
        },
    };

    return pet;
}

// Create multiple pets
const pet1 = createPet("Bingo", "Dog");
const pet2 = createPet("Flash", "Turtle");
const pet3 = createPet("Rango", "Chameleon");

// Function to test pet actions
function testPet(pet) {
    console.log(`\n--- Testing ${pet.name} ---`);
    console.log("Initial Pet Status:");
    pet.status();

    console.log("\nPlay Method:");
    console.log(pet.play());
    
    console.log("\nStatus after play():");
    pet.status();

    console.log("\nPlay Method:");
    console.log(pet.play());

    console.log("\nStatus after play():");
    pet.status();

    console.log("\nFeed Method:");
    console.log(pet.feed());

    console.log("\nStatus after feed():");
    pet.status();
}

// Test each pet
testPet(pet1);
testPet(pet2);
testPet(pet3);

// Bonus Task: Test the rest() method for pet1
console.log("\n--- Bonus Task - Rest ---");
console.log(pet1.rest());
pet1.status();

