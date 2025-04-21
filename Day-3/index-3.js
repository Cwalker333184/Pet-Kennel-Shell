// Factory function to create pet objects
function createPet(name, species, energy, happiness) {
    const maxEnergy = energy; // Each pet has its own max energy based on its starting value
  
    return {
      name,
      species,
      energy,
      happiness,
      maxEnergy,
  
      // Show current status of the pet
      status() {
        console.log(
          `${this.name} the ${this.species} has ${this.energy} energy and ${this.happiness} happiness.`
        );
      },
  
      // Feed the pet to increase energy
      feed() {
        if (this.energy < this.maxEnergy) {
          this.energy += 10;
          if (this.energy > this.maxEnergy) this.energy = this.maxEnergy;
          console.log(`${this.name} has been fed.`);
        } else {
          console.log(`${this.name} is already full of energy!`);
        }
      },
  
      // Play with the pet to increase happiness but decrease energy
      play() {
        if (this.energy >= 10) {
          this.energy -= 10;
          this.happiness += 5;
          console.log(`${this.name} played and had fun!`);
        } else {
          console.log(`${this.name} is too tired to play.`);
        }
      },
  
      // Rest the pet to regain energy
      rest() {
        this.energy += 20;
        if (this.energy > this.maxEnergy) this.energy = this.maxEnergy;
        console.log(`${this.name} took a nap and restored some energy.`);
      },
  
      // Simulate a loss of happiness (e.g., if not played with)
      getLonely() {
        this.happiness -= 3;
        if (this.happiness < 0) this.happiness = 0;
        console.log(`${this.name} is feeling a bit lonely.`);
      }
    };
  }
  
  // Create pet objects
  const pet1 = createPet("Buddy", "Dog", 80, 60);
  const pet2 = createPet("Whiskers", "Cat", 70, 75);
  const pet3 = createPet("Fluffy", "Rabbit", 60, 85);
  const pet4 = createPet("Goldie", "Fish", 50, 40);
  const pet5 = createPet("Chirpy", "Bird", 65, 70);
  const pet6 = createPet("Spike", "Iguana", 55, 50);
  
  // Initialize kennel array
  const kennel = [];
  
  // Add pets using push()
  kennel.push(pet1, pet2, pet3, pet4, pet5);
  
  // Add remaining pet using bracket notation
  kennel[kennel.length] = pet6;
  
  // Display kennel contents using console.table for easy reading
  console.table(kennel.map(p => ({
    Name: p.name,
    Species: p.species,
    Energy: p.energy,
    Happiness: p.happiness
  })));
  
  // Rest all pets using forEach
  kennel.forEach(pet => {
    pet.rest();
    pet.getLonely(); // simulate unhappiness over time
  });
  
  // Show updated status after resting
  kennel.forEach(pet => pet.status());
  