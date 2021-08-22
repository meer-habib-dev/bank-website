//get value of input and conver to number
function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    input.value = '';
    return inputValue;
}

//get value of span and convert to number
function getSpanValue(spanId,depoAmount) {
    const spanText = document.getElementById(spanId);
    const spanValue = parseFloat(spanText.innerText);
    const totalAmout = spanValue + depoAmount;
    spanText.innerText = totalAmout;

}

//get current value
function currentBalance() {
    
    const balance = document.getElementById("balanceAmount");
    const balanceInt = parseFloat(balance.innerText);
    return balanceInt;
}
//add and reduce the value of bank total
function calculateBal(depoAmount,isAdd) {

    const balance = document.getElementById("balanceAmount");
    const balanceInt = currentBalance();
    
    if (isAdd == true) {
        const totalBalance = balanceInt + depoAmount;
        balance.innerText = totalBalance;
    } else if(isAdd == false){
        const totalBalance = balanceInt - depoAmount;
        balance.innerText = totalBalance;
        
    }
}

//add deposite amount using event handler
document.getElementById('deposit-btn').addEventListener('click', function () {

    //get the value of input
    const depoAmount = getInputValue('user-deposit');

    if (depoAmount < 0) {
        alert('Positive Number Lik');
    }
    if(depoAmount > 0){
        //get values of deposite 
        getSpanValue('depositeAmount',depoAmount);

        //add deposite values with balance
        calculateBal(depoAmount,true)  
    }


});

//add withdraw amount and reduce the amount from balance;

document.getElementById('withdraw-btn').addEventListener('click', function () {
    
    //get the value of input;
    const withdrawValue = getInputValue('user-withdraw');

    if (withdrawValue < 0 || withdrawValue > currentBalance()) {
        alert('Please give a amount that you have on your account');
    } else if (withdrawValue > 0 && withdrawValue < currentBalance()) {
    //get the span value of withdraw amount;
    getSpanValue('withdrawAmt', withdrawValue);

    //calculate the balance amount;
    calculateBal(withdrawValue, false);
    }

    
});

const dek = document.querySelectorAll('div');
console.log(dek)

function value(10,20) {
    console.log(value);
}