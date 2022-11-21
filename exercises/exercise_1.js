class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle; 
        this.payRate = payRate;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let employee = new Employee(14, "Eric", "Harris", "Realest Man", 15.25)

console.log(employee.getFullName())