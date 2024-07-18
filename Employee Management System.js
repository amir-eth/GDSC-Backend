let employees = [];
function addEmployee(id, name, position, department) {
    let employee = {
        id: id,
        name: name,
        position: position,
        department: department 
    }
    employees.push(employee);
    console.log("Successfully added!");
    reloadJSON()
}

function listEmployees() {
    employees.forEach(function(employeelist) {
        console.log(employeelist);
    });
}
function findEmployee(id) {
    let employee = employees.find(employee => employee.id === id);
    if (employee) {
        console.log(`Name: ${employee.name}, ID: ${employee.id}`);
    } else {
        console.log("Employee 404!");
    }
}
function updateEmployee(id, newName, newPosition, newDepartment) {
    let index = employees.findIndex(employee => employee.id === id)
    if (index !== -1) {
        employees[index].name = newName;
        employees[index].position = newPosition;
        employees[index].department = newDepartment;
        console.log("Successfully updated!")
        reloadJSON()
    } 
    else{
        console.log("ID 404!")
    }
}
function deleteEmployee(id) {
    let index = employees.findIndex(employee => employee.id === id)
    if (index !== -1) {
        employees.splice(index , 1)
        console.log("Sucessfully deleted!") }
        reloadJSON()
} 
function reloadJSON (){
    const jsonfile = JSON.stringify(employees)
    console.log(jsonfile)
}
// Use the functions defined above to test the code