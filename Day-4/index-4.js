function createPet(name, species, energy, happiness) {
    // Assign each species a fatigue rate (how fast they get tired)
    const fatigueRate = {
      Dog: 10,
      Cat: 5,
      Fish: 2
    };
  
    const maxEnergy = energy;
  
    return {
      name,
      species,
      energy,
      happiness,
      maxEnergy,
      fatigueRate: fatigueRate[species],
  
      // Display current status of the pet
      status() {
        console.log(
          `${this.name} the ${this.species} has ${this.energy} energy and ${this.happiness} happiness.`
        );
      },
  
      // Feed increases happiness randomly and restores a bit of energy
      feed() {
        const happinessBoost = Math.floor(Math.random() * 10) + 5;
        this.happiness += happinessBoost;
        if (this.happiness > 100) this.happiness = 100;
        this.energy += 5;
        if (this.energy > this.maxEnergy) this.energy = this.maxEnergy;
        console.log(`Feeding ${this.name}! Happiness is now ${this.happiness}.`);
      },
  
      // Simulate boredom, reducing happiness over time
      bored() {
        this.happiness -= 3;
        if (this.happiness < 0) this.happiness = 0;
      },
  
      // Simulate energy loss
      play() {
        this.energy -= this.fatigueRate;
        if (this.energy < 0) this.energy = 0;
      }
    };
  }
  
  // Create 3 kennels
  const dogKennel = [];
  const catKennel = [];
  const fishTank = [];
  
  // Populate dogKennel
  dogKennel.push(
    createPet("Rover", "Dog", 80, 70),
    createPet("Bella", "Dog", 75, 65),
    createPet("Max", "Dog", 85, 60),
    createPet("Duke", "Dog", 90, 50),
    createPet("Luna", "Dog", 70, 55)
  );
  
  // Populate catKennel
  catKennel.push(
    createPet("Whiskers", "Cat", 65, 70),
    createPet("Shadow", "Cat", 60, 75),
    createPet("Mittens", "Cat", 70, 65),
    createPet("Boots", "Cat", 68, 60),
    createPet("Socks", "Cat", 64, 55)
  );
  
  // Populate fishTank
  fishTank.push(
    createPet("Goldie", "Fish", 50, 60),
    createPet("Bubbles", "Fish", 48, 55),
    createPet("Nemo", "Fish", 52, 50),
    createPet("Dory", "Fish", 45, 45),
    createPet("Finley", "Fish", 55, 58)
  );
  
  // Feed all dogs
  for (let i = 0; i < dogKennel.length; i++) {
    dogKennel[i].feed();
  }
  
  // Output status of all dogs
  console.log("\nDog Kennel Status:");
  dogKennel.forEach(dog => dog.status());
  
  // Feed all cats
  for (let i = 0; i < catKennel.length; i++) {
    catKennel[i].feed();
  }
  
  // Output status of all cats
  console.log("\nCat Kennel Status:");
  catKennel.forEach(cat => cat.status());
  
  // Feed all fish
  for (let i = 0; i < fishTank.length; i++) {
    fishTank[i].feed();
  }
  
  // Output status of all fish
  console.log("\nFish Tank Status:");
  fishTank.forEach(fish => fish.status());