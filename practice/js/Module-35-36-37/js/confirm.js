// console.log('clicked kaka')
const goBtn = () => {
    const want = confirm('Do you want to go');
    if (want) {
        setTimeout(() => {
            const where = prompt('where you want to go');
            // console.log(where);
            if (where === 'jsr') {
                setTimeout(() => {
                    alert('we will go next sunday');
                }, 500);
            } else {
                setTimeout(() => {
                    prompt('No dont like the idea...try again');

                }, 500);
            }
        }, 1000);
    } else {
        alert('Fuck Off');
    }
    // console.log(want);
}
