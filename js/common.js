function calculateSubTotal() {
    //calculate total
    const phoneTotalPrice = getelementvaluebyId('phone-total');
    const caseTotalPrice = getelementvaluebyId('case-total');
    const subtotal = phoneTotalPrice + caseTotalPrice;
    const subtotalelement = document.getElementById('sub-total');
    subtotalelement.innerText = subtotal;
}

//get element value by id
function getelementvaluebyId(elementId) {
    const phoneTotalelement = document.getElementById(elementId);
    const phonetotalString = phoneTotalelement.innerText;
    const prevphonetotal = parseInt(phonetotalString);
    return prevphonetotal;
}