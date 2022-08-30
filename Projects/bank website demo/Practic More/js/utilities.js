function makeParseFloat(id){
    const getId = document.getElementById(id);
    const getValue = getId.value;
    const getValueFloat = parseFloat(getValue);
    getId.value = '';
    return getValueFloat;
}

function makeParseFloatInnertext(id){
    const getId = document.getElementById(id);
    const getInnertext = getId.innerText;
    const getInnertextFloat = parseFloat(getInnertext);
    return getInnertextFloat;
}

function setInnervalueById(id,newvalue){
    const getId = document.getElementById(id);
    getId.innerText = newvalue;
}
