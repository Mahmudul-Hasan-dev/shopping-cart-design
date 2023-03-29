// console.log('connected')

/**
 * 1.add event handler
 * 2.add click event and function
 * check after every event
 * 3.get input field by id
 * 4.get value from input field by .value
 * 5.convert value to number type
 */

document.getElementById('btn-case-plus').addEventListener('click', function () {
    // console.log('clicked')

    const caseNumber = document.getElementById('case-input-field');
    const caseNumberString = caseNumber.value;
    const prevcaseNumber = parseInt(caseNumberString);

    const newCaseNumber = prevcaseNumber + 1;

    caseNumber.value = newCaseNumber;

})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const caseNumber = document.getElementById('case-input-field');
    const caseNumberString = caseNumber.value;
    const prevcaseNumber = parseInt(caseNumberString);

    const newCaseNumber = prevcaseNumber - 1;
    caseNumber.value = newCaseNumber;
})