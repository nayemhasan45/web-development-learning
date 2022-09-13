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

const name = 'Hero'; const age = 34;
// const person = { name, age };
// console.log(person);

// const person2 = { name: 'ddd' }
// console.log(person2.name);
// console.log(person2["name"]);
// console.log(person2[name]);

// const adventurer = { name: 'Alice', cat: { name: 'Lucy' } };
// const ratName = adventurer?.rat?.name;
// console.log(ratName)

// let person = null;
// console.log(person ? person : "person is null");

const obj = { a: 1 };
console.log(Object.keys(obj).length === 0);