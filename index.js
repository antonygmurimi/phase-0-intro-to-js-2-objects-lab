// Write your solution in this file!
//assigning eemployee variable cariable to object and street adress
const employee = {
    name: "Antony",
    streetAddress: "23 Kerugoya"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
  }
  function updateEmployeeWithKeyAndValueAndReturnNew(employee, key, value){
    
  }
  
  