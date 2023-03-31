// console.log('connected')
//same thing but just using function
/**
 * 1.add event handler
 * 2.add click event and function
 * check after every event
 * 3.get input field by id
 * 4.get value from input field by .value
 * 5.convert value to number type
 */


function updateCaseNumber(isIncrease) {

    const caseNumber = document.getElementById('case-input-field');
    const caseNumberString = caseNumber.value;
    const prevcaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    if (isIncrease) {
        newCaseNumber = prevcaseNumber + 1;
    }
    else {
        newCaseNumber = prevcaseNumber - 1;
    }
    caseNumber.value = newCaseNumber;

    return newCaseNumber;
}

//total price function
function updateCaseTotalPrice(newCaseNumber) {
    const totalPrice = newCaseNumber * 59;

    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = totalPrice;
    // return caseTotal.innerText;
}



//plus-minus button event handler 

document.getElementById('btn-case-plus').addEventListener('click', function () {
    // console.log('clicked')
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber)

    //calculate subtotal
    calculateSubTotal();

})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    // updateCaseNumber(false);
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);

    //calculate subtotal
    calculateSubTotal();
})