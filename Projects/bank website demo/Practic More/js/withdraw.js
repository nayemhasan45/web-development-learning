document.getElementById('withdraw-btn').addEventListener('click',function(){
    const getId = makeParseFloat('withdraw-feild');
    if(isNaN(getId)){
        alert('please provide a valid number');
        return;
    }
    const getWithdrawId = makeParseFloatInnertext('withdraw-span');
    const totalWithdrawValue = getId + getWithdrawId;
    
    const getBalanceAmount = makeParseFloatInnertext('total-Balance');
    const newBalanceAmount = getBalanceAmount-getId;
    if(newBalanceAmount<getId){
        alert('Please deposit first');
        return;
    }
    setInnervalueById('withdraw-span',totalWithdrawValue);
    setInnervalueById('total-Balance',newBalanceAmount);
    // console.log(getId,getWithdrawId,totalWithdrawValue);
})