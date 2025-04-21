#  Day 3: Managing Your Pet Kennel with JavaScript Arrays

##  Objective
To practice working with **arrays** in JavaScript by creating, storing, and managing multiple pet objects. This assignment reinforces factory functions, array manipulation using `push` and bracket notation, and introduces `forEach` and `console.table`.

##  What I Built
- A `createPet(name, species, energy, happiness)` factory function that returns a pet object with:
  - `name`
  - `species`
  - `energy`
  - `happiness`
  - `maxEnergy` – unique to each pet
- Each pet object includes methods:
  - `status()` – Logs the current state of the pet
  - `play()` – Decreases energy by 15, increases happiness by 10 (unless energy is too low)
  - `feed()` – Increases energy and happiness by 20 (capped at `maxEnergy`)
  - `rest()` – Fully restores energy to `maxEnergy`
  - `decline()` – (Bonus) Decreases happiness gradually over time

##  Kennel Management
- Created at least **5+ pet objects** using `createPet`
- Stored pets in a `kennel` array using:
  - `kennel.push(pet)`
  - `kennel[index] = pet`
- Logged all pets with `console.table(kennel)`
- Used `forEach` to call `.rest()` on all pets
- Implemented logic to prevent energy from exceeding `maxEnergy` or dropping below 0


##  Files Included
- `index-3.js` – JavaScript file containing kennel management logic