let squre = [];
const avgSum = array => {
    let sum = 0;
    for (const element of array) {
        const squre1 = element * element
        squre.push(squre1);
        sum += squre1;
        var avg = sum / squre.length;
    }
    return avg;
}

console.log(avgSum([2, 3, 4, 5, 6, 7]).toFixed(3));
