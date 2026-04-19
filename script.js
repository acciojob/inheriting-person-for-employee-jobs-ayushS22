function Person(name, age) {
  this.name = name;
  this.age = age;
}

// FIXED greet format
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// jobGreet (this one is already correct format)
Employee.prototype.jobGreet = function () {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};

// Do not change below
window.Person = Person;
window.Employee = Employee;