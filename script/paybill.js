document.getElementById("pay-btn").addEventListener('click', function(event) {
    event.preventDefault();

    // ১. আপনার 'getvaluefromInput' ফাংশন দিয়ে ডেটা সংগ্রহ
    const billerAccount = getvaluefromInput('pay-number');
    const payAmountStr = getvaluefromInput('pay-amount');
    const pin = getvaluefromInput('pay-pin');

    // ২. সিম্পল ভ্যালিডেশন
    if (billerAccount.length !== 11) {
        alert("Invalid Biller Account Number! Must be 11 digits.");
        return;
    }

    // ৩. পিন চেক (ধরা যাক সঠিক পিন ১২৩৪)
    if (pin === '1234') {
        const currentBalance = getBalance(); // আপনার ফাংশন
        const payAmount = Number(payAmountStr);

        // ৪. ব্যালেন্স চেক এবং হিসাব
        if (payAmount > 0 && currentBalance >= payAmount) {
            
            const newBalance = currentBalance - payAmount;
            
            // ৫. ব্যালেন্স আপডেট করা
            setBalance(newBalance);
            alert('Bill Payment Successful!');

        } else {
            alert('Insufficient balance or invalid amount');
        }
    } else {
        alert('Wrong PIN! Please try again.');
    }
})