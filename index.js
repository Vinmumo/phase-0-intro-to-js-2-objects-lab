let employee = {
    name: "Sam",
    streetAddress: 42
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...employee };
  
    newObj[key] = value;
  
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj;
}
function deleteFromEmployeeByKey(obj, key) {
  const newObj = {...employee}
    delete newObj[key]
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
      delete obj[key]
      return obj;
  }
// Write your solution in this file!
