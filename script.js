const transactions = []

const list = document.getElementById("transaction-list")
const form = document.getElementById("transaction-form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const amountValue = document.getElementById("amount-input").value;
    const categoryValue = document.getElementById("category-select").value;
    const typeValue = document.querySelector('input[name=type]:checked')?.value;
    const dateValue = document.getElementById("date").value;

    const transactionObj = {
        id: Date.now(),
        amount: Number(amountValue),
        category: categoryValue,
        type: typeValue,
        date: dateValue,
    }

    transactions.push(transactionObj);
    saveTransactions()
    renderTransactions();
    form.reset()

    console.log("Submitted Transaction:", transactionObj );
    console.log("All Transactions:", transactions)
})

function renderTransactions(){
    list.innerHTML = "";

    transactions.forEach(trans => {
        const li = document.createElement("li")
        li.textContent = `${trans.date} | ${trans.category} | ${trans.type} | $${trans.amount}`
        
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