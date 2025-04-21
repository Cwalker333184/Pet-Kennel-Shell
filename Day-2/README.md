# Day 2: Exploring Factory Functions with a Pet Example

##  Objective
To learn how to use **factory functions** in JavaScript for dynamically creating multiple pet objects with shared behavior.

##  What I Built
- A `createPet(name, species)` factory function that returns a pet object with:
  - `name` – Pet's name
  - `species` – Type of animal (e.g., Dog, Cat)
  - `happiness` – Starts at 50
  - `energy` – Starts at 100

##  Pet Methods
Each pet object includes:
- `play()` – Decreases energy by 20, increases happiness by 10  
  _e.g., "You played with Fluffy! Happiness is now 60, and energy is now 80."_
- `feed()` – Increases both happiness and energy by 20  
  _e.g., "You fed Fluffy! Happiness is now 80, and energy is now 100."_
- `status()` – Logs the current state of the pet  
  _e.g., "Pet Name: Fluffy, Species: Dog, Happiness: 80, Energy: 100."_
- `rest()` _(Bonus)_ – Restores energy to 100  
  _e.g., "Fluffy has rested. Energy is now fully restored to 100."_

## Files Included
- `index-2.js` – JavaScript file defining the factory function and creating multiple pets