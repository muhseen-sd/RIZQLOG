const transactions = []

const form = document.getElementById("transaction-form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const amontValue = document.getElementById("amount-input").value;
    const categoryValue = document.getElementById("category-select").value;
    const typeValue = document.querySelector('input[name=type]:checked').value;
    const dateValue = document.getElementById("date").value;

    const transactionObj = {
        id: Date.now(),
        amount: Number(amontValue),
        category: categoryValue,
        type: typeValue,
        date: dateValue,
    }

    transactions.push(transactionObj)

    console.log("Submitted Transaction:", transactionObj );
    console.log("All Transactions:", transactions)
})