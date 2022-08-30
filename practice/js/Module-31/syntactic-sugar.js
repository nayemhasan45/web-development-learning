class BioData {
    name;
    id;
    versity = 'DIU';
    location = 'Asulia,Savar';
    department;
    semester = 'third';
    gpa;
    sex = 'male';
    makeQuiz(time) {
        console.log(`please make Quiz in time ${time}`);
    }
    constructor(nameOf, idOf, departmentOf, gpaOf) {
        this.name = nameOf;
        this.id = idOf;
        this.department = departmentOf;
        this.gpa = gpaOf;

    }
}
const nayem = new BioData('nayem', 5192, 'CSE', '3.17');
const nahid = new BioData('nahid', 5191, 'CSE', '2.89');
console.log(nayem);
nayem.makeQuiz('4.55');
console.log(nahid);