var employees = []
function Employee(name, jobTitle, salary, status="Full Time"){
this.name = name
this.jobTitle = jobTitle
this.salary = salary
this.status = status

//toPrintEmployeeRecord
this.printEmployeeForm = function(){
    //console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status)
    console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`)
}
}
// (e.g. "Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time")
var employee1 = new Employee ("Greg", "Software Developer", "75,000", "Contract")
var employee2 = new Employee ("Valerie", "HR Manager", "50,000")
var employee3 = new Employee ("Nadia", "Project Manager", "70,000")
//console.log(employee2.printEmployeeForm())

employees.push(employee1, employee2, employee3)
//console.log(employees[0].name) 
console.log(employees)
