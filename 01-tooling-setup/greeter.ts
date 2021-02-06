// From https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html
class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

class Thingster {
    fullThing: string;

    constructor(
        public name: string,
        public style: string,
    ) {
        this.fullThing = `I am ${name}, and I'm a ${style}`;
    }
}

interface Thing {
    name: string;
    style: string;
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

function thinger(thing: Thing) {
    return "You are " + thing.name + ", " + thing.style;
}

let user = new Student("Jane", "M.", "User");
let thingy = { name: 'Zork', style: 'cool alien' };
let thingster = new Thingster( 'Zork', 'cool alien' );

// document.body.textContent = greeter(user);
// document.body.textContent = thinger(thingster);
document.body.textContent = thingster.fullThing;