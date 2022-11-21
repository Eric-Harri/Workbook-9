class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("Eric", "Harris");
console.log(person.getFullName());

class Employee extends Person {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        super(firstName, lastName)
        this.employeeId = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    };
}
let employee = new Employee(1, "Eric", "Harris", "Software Developer", 30.5)

console.log(employee);