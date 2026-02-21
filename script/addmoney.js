document.getElementById("add-money-btn").addEventListener('click',function(){
    const bankAccount = getvaluefromInput("add-money-bank");
    if(bankAccount == "Select a Bank"){
        alert('pllease select a bank');
        return;
    }
    const accno = getvaluefromInput('add-money-number');
    if(accno.length !=11){
        alert('invalid acc no');
        return;
    }
    const amount = getvaluefromInput("add-money-amount");
    const newBalance = getBalance() + Number(amount);



    const pin = getvaluefromInput('add-money-pin');
    if(pin == '1234'){
        alert(`add money success from
            ${bankAccount}
            at ${new Date()}`);
        setBalance(newBalance);
        const history = document.getElementById('history-container');

        const newHisotry =document.createElement('div');
        newHisotry.innerHTML=`
        <div class="transection-card p-5 bg-base-100">
        add money success from
            ${bankAccount},acc-no ${accno} at ${new Date()}
            at ${new Date()}

            </div>
        `;
        history.append(newHisotry);
    }else{
        alert('invalid pin');
        return;
    }

})