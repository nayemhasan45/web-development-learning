// console.log('click');
const alart = () => {
    alert('say what you want to say');
    // console.log(kaka);
}

const dicision = () => {
    const kaka = confirm('do you want to go');
    if (kaka) {
        const kaka2 = prompt('where you want to go');
        const getdiv = document.getElementById('diva');
        getdiv.textContent = kaka2;
    } else {
        alert('you dont have the right');
    }
}