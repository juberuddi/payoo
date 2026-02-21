document.getElementById('cashout-btn').addEventListener('click',function(){
  const cashoutNumber = getvaluefromInput('cashout-number');
  if(cashoutNumber.length !=11){
    alert('invalid number');
    return;
  }
  const cashoutAmount = getvaluefromInput('cashout-amount');

  // const balenceElement =document.getElementById("balance");
  //   const balance = balenceElement.innerText;
  //   console.log(balance);
  const currentBalance = getBlance();

    const newBalance =currentBalance-Number(cashoutAmount);
    if(newBalance < 0){
      alert('invalid amount');
      return;
    }
    const pin =getvaluefromInput('cashout-pin');
    if(pin === '1234'){
      alert('casout successful');
        console.log('new balance',newBalance);
        setBalance(newBalance);
    }else{
      alert('invalid pin');
    }




})




// console.log('jubayer is back');

// document.getElementById('cashout-btn').addEventListener('click',function(){
//     const cashoutNumberinput = document.getElementById("cashout-number");
//     const cashoutNumber =cashoutNumberinput.value;
//     console.log(cashoutNumber);
//       if(cashoutNumber.length != 11){
//         alert('invalid agent number');
//         return;
//       }


//     const cashoutAmountinput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountinput.value;
//     console.log(cashoutAmount);
  
    


//     const balenceElement =document.getElementById("balance");
//     const balance = balenceElement.innerText;
//     console.log(balance);
//     const newBalance =Number(balance)-Number(cashoutAmount);
//     if(newBalance < 0){
//       alert('invalid amount');
//       return;
//     }
//     console.log(newBalance);

//     const cashoutPininput = document.getElementById("cashout-pin");
//     const pin = cashoutPininput.value;
    
    

//     if(pin == '1234'){
//         alert('cashout sucessful');
//         console.log('new balance',newBalance);
//         balenceElement.innerText=newBalance

//     }else{{
//         alert('invalid pin');

//         return;
//     }}
// })