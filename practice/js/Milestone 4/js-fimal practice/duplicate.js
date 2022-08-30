const friends = ['nayem','noman','honu','nayem',
    'nahid','uthso','nahid','noyon',
    'samim','noman','noyon','saykay','samim'];
let bestF = [];
for(let i=0; i<friends.length; i++){
    const element = friends[i];
    if(bestF.indexOf(element) === -1){
        bestF.push(element);
    }
}
console.log(bestF);