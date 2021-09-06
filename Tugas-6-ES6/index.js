// soal 1
let p = 2;
let l = 3;

const luas = () => {
    console.log("Luas = " + (p * l));
}

luas();

const keliling = () => {
    console.log("Keliling = " + (2*p + 2*l));
}

keliling();

// soal 2
const fullName = () => {
    console.log(firstName + " " + lastName);
}

let firstName = "Yulia";
let lastName = "Apriani";

fullName();

// soal 3
const newObject = {
    firstName: "Yulia",
    lastName: "Apriani",
    address: "Jl. Raya Gunung Salak Endah",
    hobby: "bermain game",
}

console.log(newObject.firstName, newObject.lastName, newObject.address, newObject.hobby);

// soal 4
let west = ['Will', 'Chris', 'Sam', 'Holly']
let east = ['Gill', 'Brian', 'Noel', 'Maggie']

let combined = [...west, ...east]
console.log(combined);

// soal 5
const planet = "earth"; 
const view = "glass";

const before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit ${planet}`;
console.log(before);
