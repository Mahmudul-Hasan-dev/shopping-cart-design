

//get element value by id
function getelementvaluebyId(elementId) {
    const phoneTotalelement = document.getElementById(elementId);
    const phonetotalString = phoneTotalelement.innerText;
    const prevphonetotal = parseInt(phonetotalString);
    return prevphonetotal;
}
function setTextTotalElement(elementId, value) {
    const subtotalelement = document.getElementById(elementId);
    subtotalelement.innerText = value;
}
function calculateSubTotal() {
    //calculate total
    const phoneTotalPrice = getelementvaluebyId('phone-total');
    const caseTotalPrice = getelementvaluebyId('case-total');
    const subtotal = phoneTotalPrice + caseTotalPrice;
    setTextTotalElement('sub-total', subtotal);

    //calculate tax amount

    const taxAmountstring = (subtotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountstring);
    setTextTotalElement('tax', taxAmount);

    const total = subtotal + taxAmount;
    setTextTotalElement('total', total);
}