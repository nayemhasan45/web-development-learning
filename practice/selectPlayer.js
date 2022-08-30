
// const totalPlayer = [];
// function showName(element) {
//     console.log(element);
//     const selected = document.getElementById('selected-5');
//     selected.innerHTML = "";
//     for (let i = 0; i <= element.length; i++) {
//         const name = element[i];
//         const ol = document.createElement('ol');
//         ol.innerHTML = `
//             <li>${name}</li>
//         `
//         if (totalPlayer.length > 5) {
//             return alert('Maximum player selected');
//         } else {

//             selected.appendChild(ol);
//         }
//     }
//     // return selected;
// }

// /* selected v part  */
// function addToSelect(btn) {
//     const playerSelect = btn.parentNode.parentNode.children[0].innerText;
//     console.log(playerSelect);
//     totalPlayer.push(playerSelect);
//     btn.setAttribute('disabled', 'disabled');
//     showName(totalPlayer);
//     return totalPlayer;
// }
const playerArray = [];
function addToSelect(btn) {
    const selectPlayer = btn.parentNode.parentNode.children[0].innerText;
    playerArray.push(selectPlayer);
    btn.setAttribute('disabled', 'disabled');
    const selected = document.getElementById('selected-5');
    const ol = document.createElement('ol');
    ol.innerHTML = `
        <li>${selectPlayer}</li>
    `
    if (playerArray.length > 5) {
        return alert('Maximum player selected... Try your luck next tiem:)');
    } else {
        selected.appendChild(ol);

    }
    console.log(playerArray.length);
}