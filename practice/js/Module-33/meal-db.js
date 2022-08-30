const loadMeal = () => {
    fetch('www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
        .then(res => res.json())
        .then(items => console.log(items));
}

const displayMeal = items => {
    const getMeal = document.getElementById('section-div');
    items.forEach(items => {
        console.log(items);
    });
}

loadMeal();