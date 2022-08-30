/* console.log('hello form js');
console.log(document);
const h2Collection = document.getElementsByTagName('h2');
// console.log(h2Collection[1]);
const liCollection = document.getElementsByTagName('li');
console.log(liCollection);
for(const kaka of liCollection){
    console.log(kaka.innerText);
}
*/
/* const gettingId = document.getElementById('heading-1');
console.log(gettingId);
const gettingClass = document.getElementsByClassName('list-items');
console.log(gettingClass);

// quarry selector all 

const allLi = document.querySelectorAll('.fruits li');
// console.log(allLi);
for(const li of allLi){
    console.log(li);
} */
const section = document.querySelectorAll('#fruits');
for(const sec of section){
    sec.style.border= '2px solid red';
    sec.style.padding = '5px';
    sec.style.margin  = '2rem';
    sec.style.textAlign = 'center';
    // sec.style. = 'none'
    console.log(sec);
}
// console.log(document.getElementById('list-items'));
// const frutiSection =document.getElementById('fruits');
const frutiSection=document.querySelectorAll('#fruits ul li');
console.log(frutiSection);
// const mainContainerGet = document.getElementById('heading-1');
// console.log(mainContainerGet);
const mainContainerOf= document.querySelectorAll('#mainContainer section');
console.log(mainContainerOf);
const sectionLast = document.createAttribute('section');
mainContainerOf.append