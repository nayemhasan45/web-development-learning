function nameBtn() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(json => console.log(json));
}


function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data));
}


function displayUsers(data) {
    console.log(data);
    const userInfo = document.getElementById('user-info');
    for (const user of data) {
        console.log(user);
        const li = document.createElement('li');
        li.classList.add('class1');
        li.innerHTML = `
            <p>Id:${user.id}</p>
             <p>Name:${user.name}</p>
             <p>User Name:${user.username}</p>
             <p>Email:${user.email}</p>
             <p>Phone:${user.phone}</p>
        `
        userInfo.appendChild(li);
    }
}