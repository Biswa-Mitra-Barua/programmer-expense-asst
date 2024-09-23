// getting the values
function getInputValueById (id){
    return parseFloat(document.getElementById(id).value);
}

function showError (id){
    return document.getElementById(id).classList.remove('hidden');
}

// added event listener for the calculate button
const calculateBtn = document.getElementById('calculate');
calculateBtn.addEventListener('click', function () {
   
    // const income = parseFloat(document.getElementById('income').value);
    // const software = parseFloat(document.getElementById('software').value);
    // const courses = parseFloat(document.getElementById('courses').value);
    // const internet = parseFloat(document.getElementById('internet').value);

    // get value using function
    const income = getInputValueById('income');
    const software = getInputValueById('software');
    const courses = getInputValueById('courses');
    const internet = getInputValueById('internet');

    // console.log({income, software, courses, internet})
    // console.table({income, software, courses, internet})

    if (income <= 0 || isNaN(income)){
        // document.getElementById('income-error').classList.remove('hidden');
        // return;
        showError('income-error');
    }
    if (software <=0 || isNaN(software)){
        // document.getElementById('software-error').classList.remove('hidden');
        // return;
        showError('software-error');
    }
    if (courses <=0 || isNaN(courses)){
        // document.getElementById('courses-error').classList.remove('hidden');
        // return;
        showError('courses-error');
    }
    if (internet <=0 || isNaN(internet)){
        // document.getElementById('internet-error').classList.remove('hidden');
        // return;
        showError('internet-error');
    }
    const totalExpense = software + courses + internet;
    const balance = income - totalExpense;
    if(totalExpense > income){
        // document.getElementById('logic-error').classList.remove('hidden');
        // return;
        showError('logic-error');
    }

    const totalExpenseElement = document.getElementById('total-expenses');
    totalExpenseElement.innerText = totalExpense.toFixed(2);

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);

    const result = document.getElementById('results');
    result.classList.remove('hidden');

    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';

    historyItem.innerHTML = `
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    <p>Income: ৳${income.toFixed(2)}</p>
    <p>Expenses: ৳${totalExpense.toFixed(2)}</p>
    <p>Balance: ৳${balance.toFixed(2)}</p>
    `;
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

})

// savings calculation
const calculateSavingsBtn = document.getElementById('calculate-savings');
calculateSavingsBtn.addEventListener('click', function () {
    const savingPercentage = parseFloat(document.getElementById('savings').value);

    // const income = parseFloat(document.getElementById('income').value);
    // const software = parseFloat(document.getElementById('software').value);
    // const courses = parseFloat(document.getElementById('courses').value);
    // const internet = parseFloat(document.getElementById('internet').value);

    const income = getInputValueById('income');
    const software = getInputValueById('software');
    const courses = getInputValueById('courses');
    const internet = getInputValueById('internet');


    const totalExpense = software + courses + internet;
    const balance = income - totalExpense;

    const savingsAmount = (savingPercentage * balance) / 100;
    const savingElement = document.getElementById('savings-amount');
    savingElement.innerText = savingsAmount.toFixed(2);

    const remainingBalance = document.getElementById('remaining-balance');
    const remainingAmount = balance - savingsAmount;
    remainingBalance.innerText = remainingAmount.toFixed(2);
})

// history tab functionality
const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function () {
    historyTab.classList.add(
        'text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600'
    );
    historyTab.classList.remove('text-gray-600');
    assistantTab.classList.remove(
        'text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600'
    );
    assistantTab.classList.add('text-gray-600');

    document.getElementById('expense-form').classList.add('hidden');

    // document.getElementById('history-section').classList.remove('hidden');
    showError('history-section');
})

assistantTab.addEventListener('click', function(){
    assistantTab.classList.add(
        'text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600'
    );
    historyTab.classList.remove(
        'text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600'
    );
    // document.getElementById('expense-form').classList.remove('hidden');
    showError('expense-form');

    document.getElementById('history-section').classList.add('hidden');
})

// instant live validation check for input

// document.getElementById('income').addEventListener('input', function(){
//     const inputValue = parseFloat(document.getElementById('income').value);
//     if(inputValue <=0 || isNaN(inputValue)){
//         document.getElementById('income-error').classList.remove('hidden');
//         return;
//     }
// })
