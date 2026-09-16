const transactions = []

const list = document.getElementById("transaction-list")
const form = document.getElementById("transaction-form")
const totalIncome = document.getElementById("total-income")
const totalExpense = document.getElementById("total-expense")
const balance = document.getElementById("balance")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const amountValue = document.getElementById("amount-input").value;
    const categoryValue = document.getElementById("category-select").value;
    const typeValue = document.querySelector('input[name=type]:checked')?.value;
    const dateValue = document.getElementById("date").value;

    const amountNumber = Number(amountValue)
    if (Number.isNaN(amountNumber) || amountNumber <= 0){
        alert("Please enter a valid amount greater than 0.")
        return
    }
    
    if (!typeValue){
        alert("The type is invalid!")
        return
    } 
    
    if (!dateValue){
        alert("Please choose a date!")
        return
    }

    const transactionObj = {
        id: Date.now(),
        amount: amountNumber,
        category: categoryValue,
        type: typeValue,
        date: dateValue,
    }

    transactions.push(transactionObj);
    saveTransactions()
    renderTransactions();
    updateSummary()
    form.reset()

    console.log("Submitted Transaction:", transactionObj );
    console.log("All Transactions:", transactions)
})

function renderTransactions(){
    list.innerHTML = "";

    if (transactions.length === 0){
        let notify = document.createElement("li")
        notify.textContent = `No transactions yet.`;
        list.append(notify);

        return;
    }

    transactions.forEach(trans => {
        const li = document.createElement("li")
        li.textContent = `${trans.date} | ${trans.category} | ${trans.type} | ${formatCurrency(trans.amount)}`
        
        // creating a delete button
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"

        deleteBtn.addEventListener("click", () => {
            console.log("Delete id", trans.id)

            deleteTransaction(trans.id)
        })
        
        li.appendChild(deleteBtn)
        list.appendChild(li)
    })

}

function deleteTransaction(id){
            const updatedTransactions = transactions.filter(trans => {
               return trans.id !== id
            })

            transactions.length = 0;
            transactions.push(...updatedTransactions)

            saveTransactions()
            renderTransactions()
            updateSummary()
    }

    // Saving function
    function saveTransactions() {
        localStorage.setItem("transactions", JSON.stringify(transactions))
    }

    // Load from local storage when page opens
    function loadTransactions(){       
            const storedTransactions  = localStorage.getItem("transactions");
            if (!storedTransactions) return
            
            const parsedTransactions = JSON.parse(storedTransactions);
            transactions.push(...parsedTransactions)
}

    loadTransactions()  
    renderTransactions()
    updateSummary()

    function updateSummary(){
        let income = 0;
        let expense = 0;

        transactions.filter((trans) => {
            if (trans.type === "income"){
                income += trans.amount
            } else if (trans.type === "expense"){
                expense += trans.amount
            }
        });

        const currentBalance = income - expense;

        totalIncome.textContent = `Total Income: ${formatCurrency(income)}`
        totalExpense.textContent = `Total Expense: ${formatCurrency(expense)}`
        balance.textContent = `Balance: ${formatCurrency(currentBalance)}`
}

function formatCurrency(value){
    return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"

    });
}