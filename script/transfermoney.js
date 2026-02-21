document.getElementById("transfer-btn").addEventListener('click',function(event){
    event.preventDefault();
    const accountNums = getvaluefromInput('transfer-number');
    const amounts = getvaluefromInput("transfer-amount");
    const pins = getvaluefromInput("transfer-pin");
    if(accountNums.length != 11){
        alert("invalid Account number!must be 11 digits");
        return;
    }
    if(pins === '1234'){
        const currentsBlances = getBalance();
        const withdrawAmounts = Number(amounts);
        if (withdrawAmounts > 0 && currentsBlances>= withdrawAmounts) {
            
            const newBalances = currentsBlances - withdrawAmounts;
            setBalance(newBalances);
            alert('transfer successful')

    }else {
            alert('Insufficient balance or invalid amount');
    }
        } else {
        alert('Wrong PIN! Please try again.');
    }




})
// document.getElementById('cashout-btn').addEventListener('click', function(event) {
//     event.preventDefault(); // পেজ রিলোড হওয়া আটকাবে

//     // ২. আপনার 'getvaluefromInput' ফাংশন ব্যবহার করে ডেটা নেওয়া
//     const accountNum = getvaluefromInput('cashout-number');
//     const amounts = getvaluefromInput('cashout-amount');
//     const pins = getvaluefromInput('cashout-pin');

//     // ৩. ইনপুট ভ্যালিডেশন (ডাটা ঠিক আছে কিনা যাচাই)
//     if (accountNum.length !== 11) {
//         alert("Invalid Account Number! Must be 11 digits.");
//         return;
//     }

//     // ৪. পিন চেক (ধরা যাক সঠিক পিন ১২৩৪)
//     if (pin === '1234') {
//         const currentBalance = getBalance(); // আপনার ফাংশন দিয়ে ব্যালেন্স আনা
//         const withdrawAmount = Number(amount);

//         if (withdrawAmount > 0 && currentBalance >= withdrawAmount) {
//             // ৫. নতুন ব্যালেন্স হিসাব করা
//             const newBalance = currentBalance - withdrawAmount;
            
//             // ৬. স্ক্রিনে নতুন ব্যালেন্স সেট করা
//             setBalance(newBalance);
            
//             alert('Transfer Successful!');
//         } else {
//             alert('Insufficient balance or invalid amount');
//         }
//     } else {
//         alert('Wrong PIN! Please try again.');
//     }
// });