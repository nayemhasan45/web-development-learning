const student = {
    name: 'nayem',
    id: 221155192,
    section: 'x',
    department: 'cse',
    course: {
        course1: 'eee',
        course2: 'cse',
        course3: 'ged'
    }
}

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);
const studentParse = JSON.parse(studentJSON);
console.log(studentParse);