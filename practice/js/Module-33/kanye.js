// console.log('clicked');
function quate() {
    fetch('https://api.kanye.rest')
        .then(rest => rest.json())
        .then(data => displayQuate(data));
}

function displayQuate(data) {
    console.log(data);
    const id = document.getElementById('disQuate');
    id.innerText = data.quote;
}