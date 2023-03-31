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
// //get element value by id
// function getelementvaluebyId(elementId) {
//     const phoneTotalelement = document.getElementById(elementId);
//     const phonetotalString = phoneTotalelement.innerText;
//     const prevphonetotal = parseInt(phonetotalString);
//     return prevphonetotal;
// }





// console.log('phone js added');
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const phoneNumber = updatePhoneNumber(true);
    updatePrice(phoneNumber);

    // //calculate total
    calculateSubTotal();

})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const phoneNumber = updatePhoneNumber(false);
    updatePrice(phoneNumber);

    //calculate total
    calculateSubTotal();
})