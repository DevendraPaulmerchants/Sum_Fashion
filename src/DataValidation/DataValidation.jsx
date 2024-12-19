
export const CamelCase = (str) => {
    if (typeof str !== 'string') return '';
    let finalString = [];
    const requiredString = str.split(" ");
    for (var i = 0; i < requiredString.length; i++) {
        finalString.push(
            requiredString[i].charAt(0).toUpperCase() + requiredString[i].slice(1).toLowerCase()
        );
    }
    return finalString.join(" ");
}

export const handleInputChangeWithAlphabetOnly = (e, setValue) => {
    const input = e.target.value;
    // const isAlphabetic = /^[a-zA-Z\s]*$/.test(input);
    const sanitizedValue = input.replace(/^\s+|\s+(?=\s)/g, '').replace(/[0-9]/g, '');
    setValue(CamelCase(sanitizedValue));
    // setValid(isAlphabetic);
};

export const handleMobileNumberChange = (e, setValue) => {
    const mobile = e.target.value;
    if (mobile.length > 10) {
        alert("Mobile number should not exceed 10 digits.");
        return;
    }
    if (!/^\d*$/.test(mobile)) {
        alert("Please enter numbers only.");
        return;
    }
    setValue(mobile);
};
export const handleInputChangeWithAlphabetAndNumber = (e, setValue) => {
    const name = e.target.value;
    const isAlphabetic = /^[a-zA-Z0-9\s]*$/.test(name);
    const sanitizedValue = name.replace(/^\s+|\s+(?=\s)/g, '');
    setValue(CamelCase(sanitizedValue));
    // if (isAlphabetic && name.length > 5) {
    //   setValid(true)
    // }
    // else {
    //   setValid(false)
    // }
  }