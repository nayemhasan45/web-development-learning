const student = {
    name : 'nayem',
    id : 221155192,
    varsity : 'DIU',
    section : 'x',
    cgp : 4.00,
}
const keys = Object.keys(student);
const values = Object.values(student);

// console.log(keys,values);
for(var i = 0; i<keys.length; i++){
    var propertieName = keys[i];
    var propertievalue = student[propertieName];
    // console.log(propertieName,propertievalue);
}

for(var kaka in student){
    const value2 =student[kaka];
    console.log(kaka,value2);
}
const color = 'red';
switch(color){
    case 'yellow':
        console.log('fuck');
        break;
    case 'blue':
        console.log('you');
        break;
    case 'purple':
        console.log('all');
        break;
    case 'red':
        console.log('red yo boy');
        break;
    case 'ultraviolet':
        console.log('fuck');
        break;
    default:
        console.log('kala kala');
}