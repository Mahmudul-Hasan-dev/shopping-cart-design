document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const phoneNumber = updatePhoneNumber(true);
    updatePrice(phoneNumber);

    //calculate total
    const phoneTotalPrice = getelementvaluebyId('phone-total');
    const caseTotalPrice = getelementvaluebyId('case-total');
    const subtotal = phoneTotalPrice + caseTotalPrice;
    const subtotalelement = document.getElementById('sub-total');
    subtotalelement.innerText = subtotal;


})


document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const phoneNumber = updatePhoneNumber(false);
    updatePrice(phoneNumber);

    //calculate total
    const phoneTotalPrice = getelementvaluebyId('phone-total');
    const caseTotalPrice = getelementvaluebyId('case-total');
    const subtotal = phoneTotalPrice + caseTotalPrice;
    const subtotalelement = document.getElementById('sub-total');
    subtotalelement.innerText = subtotal;
})