// console.log('click')
function country() {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data));
}
country();

const displayCountry = data => {
    const countryName = document.getElementById('countryHome');
    for (const user of data) {
        // console.log(user);
        const div = document.createElement('div');
        div.classList.add('countryClass')
        div.innerHTML = `
            <img src="${user.flags.png}" alt="">
            <h3>name:${user.name.common}</h3>
            <h3>Capital:${user.capital ? user.capital[0] : 'no Capital'}</h3>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="checkDetails('${user.cca2}')">details</button>
                <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Countries Details</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Independent: ${alpahCode} <br>
                                population: ${user.population} <br>
                                nativeName: ${user.name.nativeName}<br>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>
        `
        countryName.appendChild(div);
    }
}

const checkDetails = (codes) => {
    const url = `https://restcountries.com/v2/alpha/${codes}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(details => modalContent(details));

}
// console.log(details);
// checkDetails();

function modalContent(details) {
    // const alpahCode = details.alpha2Code;
    // console.log(alpahCode);
}