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
    dinos.forEach((dino) => {
        dinosaurs.push(new dinosaurConstructor(
            dino.species,
            dino.weight,
            dino.height,
            dino.diet,
            dino.where,
            dino.when,
            dino.fact,
        ))
    })
})();


// Create Human Object
function Human(Name, Height, Weight, Diet) {
    this.name = Name;
    this.height = Height;
    this.weight = Weight;
    this.diet = Diet;
}

// Use IIFE to get human data from form


const comparemethods = {
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

dinosaurConstructor.prototype = comparemethods;


// Generate Tiles for each Dino in Array

function generatetile(humaninfo, factnumber) {

    const fragment = new DocumentFragment();
    let counter = 0, facts;
    for (let i = 0; i < 9; i++) {
        if (i == 4) {
            // insert human
            const humandiv = document.createElement('div');
            humandiv.className = 'grid-item';
            humandiv.innerHTML = `<h3>${humaninfo.name}</h3><img src="images/human.png" alt="human image">`;
            fragment.appendChild(humandiv);
        } else {
            switch (factnumber) {
                case 0:
                    facts = dinosaurs[counter].fact;
                    break;
                case 1:
                    facts = dinosaurs[counter].compareHeight(humaninfo.height);
                    break;
                case 2:
                    facts = dinosaurs[counter].compareWeight(humaninfo.weight);
                    break;
                case 3:
                    facts = dinosaurs[counter].compareDiet(humaninfo.diet);
                    break;
                case 4:
                    facts = `${dinosaurs[counter].species} lived in ${dinosaurs[counter].where}.`;
                    break;
                case 5:
                    facts = `${dinosaurs[counter].species} lived in the ${dinosaurs[counter].when} period.`;
                    break;
            }


            if (dinosaurs[counter].species === "Pigeon") {
                facts = dinosaurs[counter].fact;
            }
            const dinoDiv = document.createElement("div");
            dinoDiv.className = "grid-item";
            dinoDiv.innerHTML = `<h3>${dinosaurs[counter].species}</h3><img src="images/${dinosaurs[counter].species.toLowerCase()}.png" alt="${dinosaurs[counter].species} image"><p>${facts}</p>`;
            fragment.appendChild(dinoDiv);
            counter++;
        }
    }
    document.getElementById("grid").appendChild(fragment);
    document.querySelector("form").style.display = "none";
    if(chance == 6){
        document.getElementById("bt").style.display = "none";
    }else {
        document.getElementById("bt").style.display = "inline";
    }

}

let humaninfo

document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();
    console.log(dinosaurs)
    humaninfo = (function gethuman() {
            let human = new Human();
            human.name = document.getElementById("name").value;
            const feetHeight = document.getElementById("feet").value;
            const inchesHeight = document.getElementById("inches").value;
            human.height = feetHeight * 12 + inchesHeight;
            human.weight = document.getElementById("weight").value;
            human.diet = document.getElementById("diet").value;
            return human;
        }
    )();
    console.log(humaninfo);
    generatetile(humaninfo, 0);
});

let chance = 1;
document.getElementById("bt").addEventListener("click", () => {
    const factsnumber = Math.floor(Math.random() * 6);
    console.log(factsnumber);
    document.getElementById("grid").innerHTML = "";
    generatetile(humaninfo, factsnumber);
    chance++;
});
// Add tiles to DOM

// Remove form from screen


// On button click, prepare and display infographic
