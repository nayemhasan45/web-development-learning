const student = {
    name : 'nayem',
    id : 221155192,
    varsity : 'DIU',
    section : 'x',
    cgp : 4.00,
}
const properties = Object.keys(student);
const values = Object.values(student);
/* console.log(properties);
console.log(values); */

for(var i=0; i<properties.length; i++){
    const propertieName = properties[i];
    const propertievalue = values[i];
    // console.log(propertieName,propertievalue);
}

for(const keys in student){
    // const dada=student[values];
    console.log(keys);
}