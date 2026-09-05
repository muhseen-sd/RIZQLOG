const transactions = []

const list = document.getElementById("transaction-list")
const form = document.getElementById("transaction-form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const amontValue = document.getElementById("amount-input").value;
    const categoryValue = document.getElementById("category-select").value;
    const typeValue = document.querySelector('input[name=type]:checked')?.value;
    const dateValue = document.getElementById("date").value;

    const transactionObj = {
        id: Date.now(),
        amount: Number(amontValue),
        category: categoryValue,
        type: typeValue,
        date: dateValue,
    }

    transactions.push(transactionObj);
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

        list.appendChild(li)
    })


}

