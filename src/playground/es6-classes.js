'use strict';

class Person {
  constructor(name = 'Anonymous', age = 0, ...args) {
    this.name = name;
    this.age = age;
    this.arguments = args;
  }
  getGreeting() {
    return `Hello ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, nick) {
    super(name, age);
    this.nick = nick;
  }
  hasNick() {
    return !!this.nick;  // !! double flip zamienia undefined na false.
  }
  getDescription() {
    let coreDescription = super.getDescription() + ` Name of da game is ${this.nick}`;
    return coreDescription;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let coreGreeting = super.getGreeting();

    if (this.hasHomeLocation()) {
      return coreGreeting += ` My home location is ${this.homeLocation}.`
    }

    return coreGreeting;
  }
}

const superior = new Person('Michał Gołębiowski :D', 33, 'korasy', ['niggers', 2, 'omg'], {cosss: 'bummer'});
console.log(superior);
console.log(superior.getDescription());

console.log('-----------');

const me = new Student('Michał Gołębiowski :D', 33, 'korasy', ['niggers', 2, 'omg'], {cosss: 'bummer'});
console.log(me);
console.log(me.getDescription());
console.log(me.hasNick());

console.log('-----------');

const travelMate = new Traveler('Janosz Marian', 32, 'Niger');
console.log(travelMate);
console.log(travelMate.getGreeting());