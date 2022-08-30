var car = {
    vehicle: "car",
    imguri: "https://images.unsplash.com/photo-1610942968373-51b6b89b954f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNsYXNpYyUyMGNhcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    farePerKilo: "3",
    capacity: "4",
    descripation: "this is a clasic car. Invented in 1899. This is a rare model. Everyone loves this antic products",
}
var bike = {
    vehicle: "bike",
    imguri: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNsYXNpYyUyMGNhcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    farePerKilo: "2",
    capacity: "1",
    descripation: "this is a clasic car. Invented in 1899. This is a rare model. Everyone loves this antic products",
}
var bus = {
    vehicle: "bus",
    imguri: "https://images.unsplash.com/photo-1525962898597-a4ae6402826e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJ1c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    farePerKilo: "4",
    capacity: "26",
    descripation: "this is a clasic car. Invented in 1899. This is a rare model. Everyone loves this antic products",
}

function addcard(id) {
    const mainSection = document.getElementById('main-section');
    const mainString = JSON.stringify(id);
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card mt-3 mb-1 mx-auto" style="max-width: 840px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${id.imguri}" class="img-fluid rounded-start h-100" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Transport Mood: ${id.vehicle}</h5>
                    <p class="card-text">${id.descripation}</p>
                    <p class="card-text">Fare per kilo :${id.farePerKilo}</p>
                    <p class="card-text">Capacity :${id.capacity}</p>
                    <!-- Button trigger modal -->
                    <button type="button" onclick='modalShow(${mainString})' class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    </div>
    `
    mainSection.appendChild(div);
}
addcard(car);
addcard(bike);
addcard(bus);

function modalShow(obj) {
    const modalBody = document.getElementById('modal-body-5');
    const modalString = JSON.stringify(obj);
    modalBody.innerHTML = `
        <div class="card mx-auto" style="width: 18rem;">
            <img src="${obj.imguri}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${obj.vehicle}</h5>
            <p class="card-text">${obj.descripation}</p>
            <p class="card-text">Fare per kilo :${obj.farePerKilo}</p>
            <p class="card-text">Capacity :${obj.capacity}</p>

            <div class="d-flex flex-column" role="search">
                    <input class="form-control mt-2" type="search" placeholder="Search" aria-label="Search">
                    <input class="form-control mt-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success mt-2" type="submit" onclick='calculateCost(${modalString})'>Submit</button>
            </div>
        </div>
    `
}

function calculateCost(obj) {
    console.log(obj);
}
