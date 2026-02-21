document.getElementById('get-btn').addEventListener('click', function(event) {
    event.preventDefault();

    // ১. কুপন ইনপুট থেকে ভ্যালু নেওয়া
    const coupon = getvaluefromInput('bonus-coupon');

    // ২. কুপন কোড চেক করা (ধরা যাক আপনার কুপন কোড হলো "FREE50")
    if (coupon === 'FREE50') {
        const currentBalance = getBalance();
        const bonusAmount = 50; // বোনাস হিসেবে ৫০ টাকা

        // ৩. ব্যালেন্স যোগ করা
        const newBalance = currentBalance + bonusAmount;
        
        // ৪. নতুন ব্যালেন্স সেট করা
        setBalance(newBalance);
        
        alert('অভিনন্দন! আপনি ৫০ টাকা বোনাস পেয়েছেন।');
        
        // ইনপুট ফিল্ড খালি করে দেওয়া
        document.getElementById('bonus-coupon').value = '';
    } else {
        alert('দুঃখিত, কুপনটি সঠিক নয়। সঠিক কুপন ব্যবহার করুন।');
    }
});