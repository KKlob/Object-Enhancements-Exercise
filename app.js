//Provided Code from SpringBoard
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
// }

//Write an ES2015 Version Below

const createInstructor = (firstName, lastName) => ({ firstName, lastName });

//Provided Code from SpringBoard
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

// Write an ES2015 Version

let favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
};

//Provided Code from SpringBoard
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
// }

// Write an ES2015 Verison

const instruct = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!"
    }
};

//Provided Instruction + Code from SpringBoard
//Write a function which generates an animal object. The function should accpet 3 arguments:
// species : the species of the animal ('cat', 'dog')
// verb : a string used to name a function ('bark', 'bleet')
// noise : a string to be printed when above function is called ('woof', 'baa')

// Write an ES2015 Version

const createAnimal = ((species, verb, noise) => {
    const animalObj = {
        species,
        [verb]() {
            console.log(noise);
        }
    };
    return animalObj;
});