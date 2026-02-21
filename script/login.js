console.log('kire')
document.getElementById("btn-login").addEventListener('click',function(){
    const numberInput = document.getElementById("input-number");
    const Number = numberInput.value;
    console.log(Number);

    const pinInput = document.getElementById("input-pin");
    const pin =pinInput.value;
    console.log(pin);

    if(Number.length === 11 && pin == "1234") {
        alert('login success');
        window.location.href = "home.html";
        // window.location.assign("/home.html");
    }else{
        alert('login failed');
        return;
    }
})
