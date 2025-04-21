// index-5.js

// Pet Factory Function with random energy (0-50)
function createPet(name, species, happiness) {
    const energy = Math.floor(Math.random() * 51); // Random energy between 0 and 50
    const maxEnergy = 100;
  
    return {
      name,
      species,
      energy,
      happiness,
      maxEnergy,
  
      // Display current pet status
      status() {
        console.log(
          `${this.name} the ${this.species} ➜ Energy: ${this.energy}, Happiness: ${this.happiness}`
        );
      },
  
      // Feed method
      feed() {
        const happinessBoost = Math.floor(Math.random() * 10) + 5;
        this.happiness += happinessBoost;
        if (this.happiness > 100) this.happiness = 100;
  
        this.energy += 10;
        if (this.energy > this.maxEnergy) this.energy = this.maxEnergy;
  
        console.log(`Feeding ${this.name}...  → Happiness: ${this.happiness}, Energy: ${this.energy}`);
      },
  
      // Play method
      play() {
        this.happiness += 10;
        if (this.happiness > 100) this.happiness = 100;
  
        this.energy -= 15;
        if (this.energy < 0) this.energy = 0;
  
        console.log(`You played with ${this.name}!  → Happiness: ${this.happiness}, Energy: ${this.energy}`);
      }
    };
  }
  
  // Create species-specific kennels
  const dogKennel = [
    createPet("Rover", "Dog", 50),
    createPet("Bella", "Dog", 60),
    createPet("Max", "Dog", 55),
    createPet("Luna", "Dog", 70),
    createPet("Duke", "Dog", 40)
  ];
  
  const catKennel = [
    createPet("Whiskers", "Cat", 50),
    createPet("Mittens", "Cat", 60),
    createPet("Boots", "Cat", 45),
    createPet("Shadow", "Cat", 65),
    createPet("Socks", "Cat", 55)
  ];
  
  const fishTank = [
    createPet("Goldie", "Fish", 45),
    createPet("Nemo", "Fish", 50),
    createPet("Bubbles", "Fish", 48),
    createPet("Dory", "Fish", 52),
    createPet("Finley", "Fish", 60)
  ];
  
  // Play with dogs (varying amounts)
  dogKennel[0].play();
  dogKennel[0].play();
  dogKennel[0].play(); // 3x
  dogKennel[1].play(); // 1x
  dogKennel[2].play();
  dogKennel[2].play(); // 2x
  
  // Log status after play
  console.log("\n Dog Kennel Status After Playing:");
  dogKennel.forEach(dog => dog.status());
  
  // Play with cats
  catKennel[0].play(); // 1x
  catKennel[1].play();
  catKennel[1].play(); // 2x
  catKennel[3].play(); // 1x
  
  // Log status after play
  console.log("\n Cat Kennel Status After Playing:");
  catKennel.forEach(cat => cat.status());
  
  // Play with fish
  fishTank[1].play(); // 1x
  fishTank[1].play(); // 2x
  fishTank[3].play(); // 1x
  
  // Log status after play
  console.log("\n Fish Tank Status After Playing:");
  fishTank.forEach(fish => fish.status());
  
  // CONDITIONAL FEEDING
  console.log("\n Feeding Only Tired Pets (Energy < 30)...");
  
  // Feed dogs if energy is below 30
  for (let i = 0; i < dogKennel.length; i++) {
    if (dogKennel[i].energy < 30) {
      dogKennel[i].feed();
    }
  }
  
  // Feed cats
  for (let i = 0; i < catKennel.length; i++) {
    if (catKennel[i].energy < 30) {
      catKennel[i].feed();
    }
  }
  
  // Feed fish
  for (let i = 0; i < fishTank.length; i++) {
    if (fishTank[i].energy < 30) {
      fishTank[i].feed();
    }
  }
  
  // FINAL STATUS
  console.log("\n Final Status of All Pets:");
  
  console.log("\n Dog Kennel:");
  dogKennel.forEach(dog => dog.status());
  
  console.log("\n Cat Kennel:");
  catKennel.forEach(cat => cat.status());
  
  console.log("\n Fish Tank:");
  fishTank.forEach(fish => fish.status());
  