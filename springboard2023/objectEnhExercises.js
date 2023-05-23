//Same keys and values

function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}

let createInstructor = {
    firstName, 
    lastName
}

//computed Property Names

let favoriteNumber = 42;
let instruction = {
    [firstName]: 'Colt'
}

instructor.favoriteNumber;

//Object Methods

let instructor = {
    sayHi() {
        return 'Hi!';
    }
    sayBye() {
        return this.firstName + ' says bye!';
    }
}

//createAnimal function

function createAnimal(species, verb, noise) {
    let animal = {
        species,
        [verb]() {
            return(noise);
        }
    };
    return animal;

}