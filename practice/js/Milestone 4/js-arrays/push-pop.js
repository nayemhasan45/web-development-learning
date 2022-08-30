var names = ['nayem', 'noman', 'gittu', 'utsho', 'noyon'];
names.push('samim', 'saykat');
names.unshift('first name', 'second name');
names.unshift('first', 'second');
names.pop();
names.shift();
console.log(names);
console.log(names.length);
console.log(names[1]);
var noyon = names.indexOf('noyon');
console.log(noyon);
names[4]='khatu batu';
console.log(names);

