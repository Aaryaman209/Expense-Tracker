let expenses = [];
let total = 0;

function addExpense() {
  const name = document.getElementById("name").value.trim();
  const amount = parseInt(document.getElementById("amount").value);
  const category = document.getElementById("category").value;

  if (!name || isNaN(amount) || amount <= 0) {
    showPopup("Please enter valid expense name and amount.");
    return;
  }

  expenses.push({ name, amount, category });
  total += amount;
  updateUI();
  showPopup("Expense added successfully!");

  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("category").value = "Food";
  document.getElementById("name").focus();
}

function updateUI() {
  const list = document.getElementById("expense-list");
  list.innerHTML = "";

  expenses.forEach((exp, index) => {
    const item = document.createElement("li");
    item.innerHTML = `
      ${exp.name} - ₹${exp.amount} [${exp.category}]
      <button onclick="deleteExpense(${index})">❌</button>
    `;
    list.appendChild(item);
  });

  document.getElementById("total").innerText = total;
}

function deleteExpense(index) {
  total -= expenses[index].amount;
  expenses.splice(index, 1);
  updateUI();
  showPopup("Expense deleted.");
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function showPopup(message) {
  const popup = document.getElementById("popup");
  popup.innerText = message;
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}

document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") addExpense();
});
document.getElementById("name").focus();
<!-- Created by Aaryaman209 | Unauthorized use prohibited -->
