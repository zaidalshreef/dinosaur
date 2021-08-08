

// Create Dino Constructor
function dinosaurConstructor(species, weight, height, diet, where, when, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
}

// Create Dino Objects
const Dinosaurs = [];
const dions = async () => {
    const req = await fetch(".dino.json");
    const result = await req.json();
    return result.Dinos;
};

// Create Human Object
function Human(Name, Height, Weight, Diet) {
    this.name = Name;
    this.height = Height;
    this.weight = Weight;
    this.diet = Diet;
}
let human = new Human();
human = (
    // Use IIFE to get human data from form
    function gethuman() {
        human.name = document.getElementById("name").value;
        const feetHeight = document.getElementById("feet").value;
        const inchesHeight = document.getElementById("inches").value;
        human.height = feetHeight * 12 + inchesHeight;
        human.weight  = document.getElementById("weight").value;
        human.diet = document.getElementById("diet").value;
        return human;
    }
)();
console.log(human);

const dinoMethods = {
    compareWeight: function (humanWeight) {
        let weightDifference = this.weight - humanWeight;
        if (weightDifference > 0) {
            return `${this.species} weighs ${weightDifference} pounds than you!`;
        } else if (weightDifference < 0) {
            weightDifference *= -1;
            return `You weigh ${weightDifference} more pounds than a ${this.species}!`;
        } else {
            return `You weight the same as ${this.species}!`;
        }
    },
    compareHeight: function (humanHeight) {
        let heightDifference = this.height - humanHeight;
        if (heightDifference > 0) {
            return `${this.species} is ${heightDifference} inches taller than you!`;
        } else if (heightDifference < 0) {
            heightDifference *= -1;
            return `You are ${heightDifference} inches taller than a ${this.species}!`;
        } else {
            return `You are the same height as ${this.species}!`;
        }
    },
    compareDiet: function (humanDiet) {
        if (this.diet === humanDiet.toLowerCase()) {
            return `You have the same diet as a ${this.species}!`;
        } else {
            return `The ${this.species} is a ${this.diet} and you are a ${humanDiet}`;
        }
    },
};
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
