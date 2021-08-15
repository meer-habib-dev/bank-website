//add deposite amount using event handler
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositeInput = document.getElementById('user-deposit');
    const depoAmount = parseFloat(depositeInput.value);
   depositeInput.value = '';
    //get values of deposite 
    const depositeValue = document.getElementById('depositeAmount');
    const depositeValueInt = parseFloat(depositeValue.innerText);
    const totalDeposite = depositeValueInt + depoAmount

    depositeValue.innerText = totalDeposite;
    
    //add deposite values with balance
    const balance = document.getElementById('balanceAmount');
    const balanceInt = parseFloat(balance.innerText)
    const totalBalance = balanceInt + depoAmount;
    balance.innerText = totalBalance;

});

//add withdraw amount and reduce the amount from balance;

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('user-withdraw');
    const withdrawValue = parseFloat(withdrawInput.value);
    withdrawInput.value = '';

    //get the value of withdraw ammount;
    const withdrawAmount = document.getElementById('withdrawAmt');
    const withdrawAmtInt = parseFloat(withdrawAmount.innerText);
    const totalWithdraw = withdrawAmtInt + withdrawValue;
    withdrawAmount.innerText = totalWithdraw;


    //Reduce Withdraw amount from Total Balance
    const balance = document.getElementById('balanceAmount');
    const redBalanceInt = parseFloat(balance.innerText)
    TotalBalanceAmount = redBalanceInt - withdrawValue;
    balance.innerText = TotalBalanceAmount;

});