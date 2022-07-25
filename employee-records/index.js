var employees = [];
function Employee (name, job, salary, status = "Full Time") {
    // use the "this" keyword to reference each object
    // that is created from this constructor
    this.name = name;
    this.job = job;
    this.salary = salary;
    this.status = status;
}

Employee.prototype.print = function printEmployeeForm () {
    console.log("Name: " + this.name + ", " + "Job Title: " + this.job + ", " + "Salary: " + this.salary + ", " + "Status: " + this.status);
}

var bob = new Employee("Bob", "V School Instructor", "$3000/hour", "Part time");
var jill = new Employee("Jill", "Accountant", "700K", "Contract");
var angela = new Employee("Angela", "Marketing intern", "$30/hour", "Contract");
bob.print();
jill.print();
angela.print();