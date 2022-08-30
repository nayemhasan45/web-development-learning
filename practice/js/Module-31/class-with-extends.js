class Common {
    name;
    id;
    versity = 'DIU';
    location = 'Asulia,Savar';
    department;
    sex;
    constructor(name, id, department, sex) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.sex = sex;
    }
}

class Student extends Common {
    semester = 'third';
    ocupation = 'student';
    gpa;
    makeQuiz(time) {
        console.log(`please make Quiz in time ${time}`);
    }
    constructor(nameOf, idOf, departmentOf, sex, gpaOf) {
        super(nameOf, idOf, departmentOf, sex);
        this.gpa = gpaOf;

    }
}
class Teacher extends Common {
    ocupation = 'teacher';
    constructor(name, id, department, sex,) {
        super(name, id, department, sex);
    }
}

const zz = new Teacher('Zahura Zaman', 45434, 'CSE', 'Female');
// console.log(zz);

const nayem = new Student('nayem', 5192, 'CSE', 'Male', 2.89);
console.log(nayem);