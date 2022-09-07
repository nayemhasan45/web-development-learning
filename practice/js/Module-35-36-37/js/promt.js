console.log('clicked');
const modalBtn = () => {
    const random = Math.random() * 10;
    console.log(random);
    if (random > 5) {

        alert('kire boro number dicish kan');
    }

}

const promtBtn = () => {
    const kaka = prompt('what is your name');
    console.log(kaka);
    const getDiv = document.getElementById('name');
    const li = document.createElement('li');
    li.innerText = kaka;
    getDiv.appendChild(li);
}

const askBtn = () => {
    const kaka = confirm('do you want to come');
    console.log(kaka);
}