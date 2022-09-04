const apiKey = `20c445c79ca4f4df137bcb3b9dc61d1c`;
const loadData = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))
        .catch(error => console.log(error));
}

const displayTemp = data => {
    // console.log(data);
    const tempField = document.getElementById('temp');
    const weatherField = document.getElementById('weater');
    tempField.innerText = data.main.temp;
    // weatherField.innerText = data.weather[0].description;
}

document.getElementById('src-btn').addEventListener('click', function () {
    const getInputFeild = document.getElementById('input-feild');
    const city = getInputFeild.value;
    document.getElementById('city-name').innerText = city;
    loadData(city);
})

loadData('dhaka');