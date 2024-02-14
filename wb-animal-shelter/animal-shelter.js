const animalData = require('./animal-data.json');



class Animal {

    constructor(name, species, color, hunger = 50) {
        this.name = name
        this.species = species
        this.color = color
        this.hunger = hunger
    }

    greet() {
        console.log(`Hi I am ${this.name} the ${this.species}!`)
    }

    feed() {
        this.hunger = (this.hunger <= 20) ? 0 : this.hunger - 20
        console.log('Yum, I love food')
    }




}
class Cat extends Animal {
    constructor(name, color, hunger = 50) {
        super(name, 'cat', color, hunger)
        this.food = 'fish'
    }

    greet() {
        console.log(`Meow, I am ${this.name} the ${this.species}!`)
    }

    feed() {
        console.log(`Yum, I love ${this.food}`)
        this.hunger = (this.hunger <= 20) ? 0 : this.hunger - 20
    }

}
class Dog extends Animal {
    constructor(name, color, hunger = 50) {
        super(name, 'dog', color, hunger)
        this.food = 'kibble'
    }

    greet() {
        console.log(`Woof, I am ${this.name} the ${this.species}!`)
    }

    feed() {
        console.log(`Yum, I love ${this.food}`)
        this.hunger = (this.hunger <= 20) ? 0 : this.hunger - 20
    }

}



class AnimalShelter {
    constructor() {
        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
    }

    adopt(animal) {
        this.animals.splice(this.animals.indexOf(animal),1)
    }

    getAnimalsBySpecies(species) {
        return this.animals.filter((animal) => animal.species === species)
    }
}


shelter = new AnimalShelter()


// Read in the animal data and add to the shelter
animalData.forEach((animal) => {
    if (animal.species === 'cat') {
        shelter.addAnimal (new Cat(animal.name, animal.color, animal.hunger ? animal.hunger : 50))
    } else if (animal.species === 'dog') {
        shelter.addAnimal (new Dog(animal.name, animal.color, animal.hunger ? animal.hunger : 50))
    } else {
        shelter.addAnimal(new Animal(animal.name, animal.species, animal.color, animal.hunger ? animal.hunger : 50))
    }
})


// fido = new Dog('Fido', 'brown', 15)
// autumn = new Cat('Autumn', 'calico', 19)

// fido.feed()
// fido.greet()
// autumn.feed()
// autumn.greet()
// console.log(fido.hunger, autumn.hunger)

// console.log(shelter.animals)


shelter.animals.forEach((animal) => {
    animal.greet()
    animal.feed()
})