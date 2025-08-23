let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function updateUI() {
  const list = document.getElementById("expense-list");
  const total = document.getElementById("total");
  list.innerHTML = "";
  let sum = 0;

  expenses.forEach((exp, index) => {
    sum += exp.amount;
    const li = document.createElement("li");
    li.innerHTML = `
      ${exp.name} - ₹${exp.amount} (${exp.category})
      <button onclick="deleteExpense(${index})">❌</button>
    `;
    list.appendChild(li);
  });

  total.textContent = sum;
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function addExpense() {
  const name = document.getElementById("expense-name").value.trim();
  const amount = parseFloat(document.getElementById("expense-amount").value);
  const category = document.getElementById("expense-category").value;

  if (name && !isNaN(amount) && amount > 0 && category) {
    expenses.push({ name, amount, category });
    updateUI();
    showPopup("Expense Added!");
    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
    document.getElementById("expense-category").value = "";
  } else {
    showPopup("Please fill all fields correctly.");
  }
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  updateUI();
}

function clearExpenses() {
  if (confirm("Clear all expenses?")) {
    expenses = [];
    updateUI();
    showPopup("All expenses cleared.");
  }
}

function showPopup(message) {
  const popup = document.getElementById("popup");
  popup.textContent = message;
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 2000);
}

// 🌙 Theme Toggle Logic
const themeSwitch = document.getElementById("theme-switch");

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeSwitch.checked = true;
  }
});

themeSwitch.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});

updateUI();
-----##Aaryaman
