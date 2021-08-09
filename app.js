

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
let dinosaurs = [];
(async function getdino() {
    const req = await fetch("./dino.json");
    const result = await req.json();
    let dinos = result.Dinos;
    dinos.forEach((dino)=>{
        dinosaurs.push(new dinosaurConstructor(
        dino.species,
        dino.weight,
        dino.height,
        dino.diet,
        dino.where,
        dino.when,
        dino.fact,
        ))})})();


// Create Human Object
function Human(Name, Height, Weight, Diet) {
    this.name = Name;
    this.height = Height;
    this.weight = Weight;
    this.diet = Diet;
}
    // Use IIFE to get human data from form

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


function genratetile(humaninfo){

    const fragment = new DocumentFragment();
    let counter = 0
for(let i = 0 ; i < 9 ;i++) {
    if (i == 4) {
        // insert human
        const humandiv = document.createElement('div');
        humandiv.className = 'grid-item';
        humandiv.innerHTML = `<h3>${humaninfo.name}</h3><img src="images/human.png" alt="human image">`;
        fragment.appendChild(humandiv);
    }else {
        const dinoDiv = document.createElement("div");
        dinoDiv.className = "grid-item";
        dinoDiv.innerHTML = `<h3>${dinosaurs[counter].species}</h3><img src="images/${dinosaurs[counter].species.toLowerCase()}.png" alt="${dinosaurs[counter].species} image"><p>${dinosaurs[counter].fact}</p>`;
        fragment.appendChild(dinoDiv);
        counter++;
    }

}
    document.getElementById("grid").appendChild(fragment);
    document.querySelector("form").style.display = "none";
    document.querySelector(".retry").classList.remove("hide");
    document.querySelector(".new-fact").classList.remove("hide");
    document.querySelector(".new-fact").style.display = "inline block";
    document.getElementById("grid").style.display = "flex";
}
    // Generate Tiles for each Dino in Array

document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();
    console.log(dinosaurs)
    const humaninfo = (function gethuman() {
            let human = new Human();
            human.name = document.getElementById("name").value;
            const feetHeight = document.getElementById("feet").value;
            const inchesHeight = document.getElementById("inches").value;
            human.height = feetHeight * 12 + inchesHeight;
            human.weight  = document.getElementById("weight").value;
            human.diet = document.getElementById("diet").value;
            return human;
        }
    )();
    genratetile(humaninfo);
});

        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
