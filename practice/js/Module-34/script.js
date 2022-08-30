const loadData = async (phone) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${phone}`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data);
}

const displayData = phones => {
    // console.log(phones);
    const getElement = document.getElementById('phone-container');
    getElement.textContent = '';
    const allPhone = document.getElementById('displayAll');
    if (phones.length > 6) {
        phones = phones.slice(0, 6);
        allPhone.classList.remove('d-none');
    } else {
        allPhone.classList.add('d-none');
    }

    const text = document.getElementById('textShow');
    if (phones.length === 0) {
        text.classList.remove('d-none');
    } else {
        text.classList.add('d-none');
    }

    // display all phone 
    phones.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card p-4">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.brand}</h5>
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <h5 class="card-title">${phone.slug}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `;
        getElement.appendChild(div);
    });
    toggle(false);
}

// toogle function 
const toggle = isSpning => {
    const displayToggle = document.getElementById('spinner');
    if (isSpning) {
        displayToggle.classList.remove('d-none');
    } else {
        displayToggle.classList.add('d-none');
    }
}
document.getElementById('btn-sarch').addEventListener('click', function () {
    // toogle start 
    toggle(true);
    const getText = document.getElementById('exampleInputEmail1').value;
    loadData(getText);
});

// show all btn 
document.getElementById('showAll').addEventListener('click', function () {
    toggle(true);
    const getText = document.getElementById('exampleInputEmail1').value;
    loadData(getText);
})

// loadData();