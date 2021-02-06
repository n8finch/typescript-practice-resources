var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var Thingster = /** @class */ (function () {
    function Thingster(name, style) {
        this.name = name;
        this.style = style;
        this.fullThing = "I am " + name + ", and I'm a " + style;
    }
    return Thingster;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function thinger(thing) {
    return "You are " + thing.name + ", " + thing.style;
}
var user = new Student("Jane", "M.", "User");
var thingy = { name: 'Zork', style: 'cool alien' };
var thingster = new Thingster('Zork', 'cool alien');
// document.body.textContent = greeter(user);
// document.body.textContent = thinger(thingster);
document.body.textContent = thingster.fullThing;
