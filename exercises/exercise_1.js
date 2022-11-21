class Employee {
  constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  promote(newJobTitle, newPayRate) {
    this.jobTitle = newJobTitle;
    this.payRate = newPayRate;
  }

  getIntro() {
    return `Hi, my name is ${this.firstName} ${this.lastName}, I'm a ${this.jobTitle}.`;
  }
}

let employee = new Employee(14, "Eric", "Harris", "Realest Man", 15.25);

console.log(employee.getFullName());
console.log(`Pay rate is ${employee.payRate}`);
console.log(employee.getFullName());
let intro = employee.getIntro();
console.log(intro);
