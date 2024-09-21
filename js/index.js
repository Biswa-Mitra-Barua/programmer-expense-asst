// globally getting the values


// added event listener for the calculate button
const calculateBtn = document.getElementById('calculate');
calculateBtn.addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    // console.log({income, software, courses, internet})
    // console.table({income, software, courses, internet})
    const totalExpense = software + courses + internet;
    const balance = income - totalExpense;

    const totalExpenseElement = document.getElementById('total-expenses');
    totalExpenseElement.innerText = totalExpense.toFixed(2);

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);

    const result = document.getElementById('results');
    result.classList.remove('hidden');
})

// savings calculation
const calculateSavingsBtn = document.getElementById('calculate-savings');
calculateSavingsBtn.addEventListener('click', function(){
    const savingPercentage = parseFloat(document.getElementById('savings').value);
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    const totalExpense = software + courses + internet;
    const balance = income - totalExpense;

    const savingsAmount = (savingPercentage * balance) / 100;
    const savingElement = document.getElementById('savings-amount');
    savingElement.innerText = savingsAmount.toFixed(2);

    const remainingBalance = document.getElementById('remaining-balance');
    const remainingAmount = balance - savingsAmount;
    remainingBalance.innerText = remainingAmount.toFixed(2);
})
