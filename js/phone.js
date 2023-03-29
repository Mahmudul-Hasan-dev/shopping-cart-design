//adding function to update phone number and reduce code repition
function updatePhoneNumber(isIncrease) {
    const phoneNumber = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumber.value;
    const prevPhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = prevPhoneNumber + 1;
    }
    else {
        newPhoneNumber = prevPhoneNumber - 1;
    }
    // console.log(newPhoneNumber);
    phoneNumber.value = newPhoneNumber;
    return newPhoneNumber;
}

//update price
function updatePrice(phoneNumber) {
    const totalPrice = document.getElementById('phone-total');
    const price = phoneNumber * 1219;
    totalPrice.innerText = price;
}



// console.log('phone js added');
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const phoneNumber = updatePhoneNumber(true);
    updatePrice(phoneNumber);
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const phoneNumber = updatePhoneNumber(false);
    updatePrice(phoneNumber);
})