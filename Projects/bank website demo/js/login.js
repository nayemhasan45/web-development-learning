document.getElementById('submit-button').addEventListener('click',function(){
    const getEmailAdd = document.getElementById('input-feild');
    const getEmailValue = getEmailAdd.value;
    const addPassword = document.getElementById('pass-feild');
    const getPassValue = addPassword.value;
    if(getEmailValue === 'nayem@45gmail.com' && getPassValue==='75907'){
        window.location.href = 'http://127.0.0.1:5500/index2.html';
    }else{
        console.log(alert('invalid password'));
        addPassword.value = '';
    }
})