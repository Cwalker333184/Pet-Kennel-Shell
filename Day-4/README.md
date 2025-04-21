#  Day 4: Organizing and Feeding Pets in Multiple Kennels

##  Objective
To continue working with arrays and objects by organizing pets into **multiple kennels** (arrays), using **loops** to perform actions on each pet. This assignment builds on previous days by requiring species-based separation and batch operations.

##  What I Built
- A `createPet(name, species, energy, happiness)` **factory function** that returns a pet object with:
  - `name`
  - `species`
  - `energy`
  - `happiness`
  - `maxEnergy` (varies per species)
- Each pet object includes methods:
  - `status()` – Logs the current state of the pet
  - `feed()` – Increases happiness by a randomized amount (5–20)
  - `rest()` – Fully restores energy to maxEnergy
  - `play()` – Reduces energy, increases happiness, may vary depending on species
  - `bored()` – Decreases happiness if not played with (bonus feature)

##  Kennel Organization
Created and populated three separate arrays:
- `dogKennel` 
- `catKennel` 
- `fishTank` 

Each array contains at least **5 pet objects** created using the `createPet` factory.

## Feeding Routine
Wrote **`for` loops** for each kennel:
- Iterates through all pets
- Calls `.feed()` method on each pet
- Logs output:  
  `"Feeding [Name]! Happiness is now [X]."`

##  Files Included
- `index-4.js` – Code for Day 4: kennel organization and feeding logic