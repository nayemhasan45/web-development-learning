const student = {
    name : 'nayem',
    id : 221155192,
    varsity : 'DIU',
    section : 'x',
    cgp : 4.00,
}
// when i know the properties of an object
const studentId = student.id;
// altarnative way
const studentId2 = student['name'];
// third way 
/* const propertieName = 'cgp';
const propertieValue2 = student[propertieName];
console.log(propertieName, propertieValue2); */
// console.log(studentId2);
/* const properties = Object.keys(student);
const propertiesvalue = Object.values(student);
console.log(properties);
console.log(propertiesvalue); */

// ste properties value 
console.log(student);
student.cgp = 3.00;
console.log(student);
