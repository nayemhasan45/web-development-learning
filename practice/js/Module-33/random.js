function randomUser() {
    const url = 'https://randomuser.me/api/?gender=female';
    fetch(url)
        .then(res => res.json())
        .then(user => displayUser(user.results[0]));
}

const displayUser = users => {
    console.log(users);
    const getuser = document.getElementById('female');
    getuser.classList.add('class');
    // const div = document.createElement('div');
    // for (const user of users) {
    getuser.innerHTML = `
        <img src="${users.picture.large}">
        <h4>Name:${users.name.first} ${users.name.last}</h4>
        <h5>Email:${users.email}</h5>
        <h5>Country:${users.location.country}</h5>
        <h5>Age:${users.dob.age}</h5>
        `
}
    // div.appendChild(getuser);
// }