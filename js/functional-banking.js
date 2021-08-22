function getInnerTextValue(fieldId) {
    const getField = document.getElementById(fieldId);
    const convertField = parseFloat(getField.innerText);
    return convertField;
}
function getInput(userId) {
    const depoInput = document.getElementById(userId);
    const depoInputValue = parseFloat(depoInput.value);
    depoInput.value = '';
    return depoInputValue;
}

function updateTotal(id,value) {
    const getDepoField = document.getElementById(id);
    const depoFieldValue = parseFloat(getDepoField.innerText);
    getDepoField.innerText = depoFieldValue + value;
    
        
   }
        
    function updateBal(amount,isThere) {
            
            const converBalance = getInnerTextValue('balanceAmount');
            
            let updateBalanceAmount;
            if (isThere == true) {
                updateBalanceAmount = converBalance + amount;
            } else if(isThere == false) {
                updateBalanceAmount = converBalance - amount;
            }
            document.getElementById('balanceAmount').innerText = updateBalanceAmount;
}
document.getElementById('deposit-btn').addEventListener('click', function () {

    const amount = getInput('user-deposit');
    if (amount > 0) {
        updateTotal('depositeAmount', amount);
        updateBal(amount,true);
    }
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const amount = getInput('user-withdraw');
    const getBalance = getInnerTextValue('balanceAmount');
    if (amount > 0 && amount <= getBalance) {
        updateTotal('withdrawAmt', amount);
        updateBal(amount, false);
   }
})