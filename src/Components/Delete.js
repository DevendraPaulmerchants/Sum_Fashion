const handlleGetOtp = () => {
    console.log(mobileNumber.length);
    if(mobileNumber.length < 18){
        alert("Please Check Mobile Number..");
        return;
    }
    const confirm = window.confirm(`Are you sure to continue with: ${mobileNumber}`);
    if (confirm) {
        setGetOTPPageOpen(true);
    }

}
