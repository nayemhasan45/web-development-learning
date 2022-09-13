const student = {
    name: 'nayem',
    id: 221155192,
    section: 'x',
    department: 'cse',
    course: [{ name: 'eee' }, { name: 'cse' }, { name: 'ged' }]
}

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);
const studentParse = JSON.parse(studentJSON);
// console.log(studentParse);

const newStudent = { ...student.course };
console.log(newStudent);
// const remaining = newStudent.filter(course => course.name !== 'ged');
// console.log(remaining);