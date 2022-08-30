const array1 = [2, 3, 4, 56, 6];
const array2 = [5, 6, 7, 8, 9];
const newArray = [];
const concate = (arr1, arr2) => {
    newArray.push(...arr1, ...arr2);
    const max = Math.max(...newArray);
    return max;
}
console.log(concate(array1, array2))