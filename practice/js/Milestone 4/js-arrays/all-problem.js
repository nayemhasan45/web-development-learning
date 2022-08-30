/* var names =['nayem', 'noman', 'noyon', 'nahid', 'gittu', 'saykat', 'shamim'];
names[3]='utsho';
console.log(names.indexOf('gittu'));
names.push('yoyo');
console.log(names); */

var myMoney=70000;
if(myMoney>80000){
    console.log('i will bye a mac');
}
else if(myMoney>60000){
    console.log('i will bye a gaming laptop');
}
else if(myMoney>40000){
    console.log('i will bye a lenevo Yoga');
}
else if(myMoney>20000){
    console.log('i will bye an used laptop');
}else{
    console.log('i will used my old mobile phone');
}
// problem-1
for(var i=1; i<=39; i++){
    // var i='ajke amr mon valo';
    console.log('ajke amr mon mela valo');
}
/* problem-2 */
for(var i=58; i<=98; i++){
    console.log(i);
}
/* EVEn number from 412 to 456 */
var i=412;
while(i<=456){
    console.log(i);
    i+=2;
}
/* show all odd number from 581 TO 623 */
var i = 581;
while(i<=623){
    console.log(i);
    i+=2;
}

/* array of all the thisng that i learn in this course */
var myLearning = ['html', 'css', 'bootstrap', 'tailwind Css', 'js', 'variable', 'arrays', 'loop', 'condition', 'oparator'] ;
for(i of myLearning){
    console.log(i);
}
/* extra prac1tice */
var it=[];
it[0]=5;
it[5]=11;
var i;
console.log(it);
for(var i of it){
    console.log(i);
}
for(i=0; i<it.length; i++){
    console.log(it[i]);
}
var i=0;
while(i<it.length){
    console.log(it[i]);
    i++;
}