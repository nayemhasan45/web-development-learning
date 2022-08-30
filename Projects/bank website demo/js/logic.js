  // Deposit part 
  document.getElementById('deposit-btn').addEventListener('click', function(){
    // get value form deposit box 
    const getDiposit = document.getElementById('getAmount');
    const getDipositV = getDiposit.value;
    const getDipositVF = parseFloat(getDipositV);
        // clear text 
        getDiposit.value = '';
        // clear text end 
    if(isNaN(getDipositVF)){
        alert('please provide a number');
        return;
    }
    // get value from deposit 
    const getSpanFD = document.getElementById('display-firstSpan');
    const getSpanFDV = getSpanFD.innerText;
    const getSpanFDVF = parseFloat(getSpanFDV);
    
    // calculate the value 
    const totalDiposit = getDipositVF+getSpanFDVF;

    // set value tor deposit
    getSpanFD.innerText = totalDiposit;

    // get Balance value 
    const pevBalance = document.getElementById('total-Balance');
    const pevBalanceV = pevBalance.innerText;
    const pevBalanceVF = parseFloat(pevBalanceV);


    // set value on the balance 
    const totalBalance = pevBalanceVF + getDipositVF;

    // set value for Balance 
    pevBalance.innerText = totalBalance;



})
// withdraw part 
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const getWithdraw = document.getElementById('withdraw-feild');
    const getWithdrawV = getWithdraw.value;
    const getWithdrawVF = parseFloat(getWithdrawV);

        // clear feild 
        getWithdraw.value= '';

    if(isNaN(getWithdrawVF)){
        alert('please provide a number');
        return;
    }
    
    // getting the withdraw value 
    const getWithdrawD = document.getElementById('withdraw-span');
    const getWithdrawDV = getWithdrawD.innerText;
    const getWithdrawDVF = parseFloat(getWithdrawDV);



    // get balance value 
    const balanceTotalForW = document.getElementById('total-Balance');
    const balanceTotalForWV = balanceTotalForW.innerText;
    const balanceTotalForWVF = parseFloat(balanceTotalForWV);
    


    if(balanceTotalForWVF<getWithdrawVF){
        console.log(alert('Not enough money............. Please diposit first'));
        return;
    }
        
    // total withdraw 
    const totalWithdraw = getWithdrawVF + getWithdrawDVF;
    // set total withdraw value 
    getWithdrawD.innerText = totalWithdraw;

    // set new balance value 
    const totalBalanceForWithdraw = balanceTotalForWVF - getWithdrawVF;
    
    // set new balance 
    balanceTotalForW.innerText = totalBalanceForWithdraw;


})