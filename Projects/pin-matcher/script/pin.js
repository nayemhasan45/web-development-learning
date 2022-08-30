function getpin() {
    const getpiN = createPin();
    const getpinS = getpiN + '';
    if (getpinS.length === 4) {
        return getpiN;
    } else {
        return getpin();
    }
}
function createPin() {
    const genaratepin = Math.round(Math.random() * 10000);
    return genaratepin;
}
document.getElementById('grnerate-pin').addEventListener('click', function () {
    const pin = getpin();
    const showpin = document.getElementById('display-pin');
    showpin.value = pin;
})