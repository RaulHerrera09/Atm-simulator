var accounts = [
    { name: "Jak", balance: 200, password: "1234" },
    { name: "Miguel", balance: 290, password: "5678" },
    { name: "Kevin", balance: 67, password: "9012" },
  ];

var currentAccount;
var currentBalance; 

function getSelectedAccount() {
    var select = document.getElementById("accounts");
    var value = select.options[select.selectedIndex].value;
    currentAccount = accounts[value];
    currentBalance = currentAccount.balance;
}

function login() {
    getSelectedAccount();
    var password = document.getElementById("password").value;
    if (password === currentAccount.password) {
      document.getElementById("login").style.display = "none";
      document.getElementById("logout").style.display = "inline-block";
      document.getElementById("options").style.display = "block";
    } else {
      alert("Invalid password. Please try again.");
    }
}

function logout() {
    document.getElementById("login").style.display = "inline-block";
    document.getElementById("logout").style.display = "none";
    document.getElementById("options").style.display = "none";
    document.getElementById("balance").style.display = "none";
    document.getElementById("amount").style.display = "none";
    document.getElementById("withdraw").style.display = "none";
    currentAccount = null;
    currentBalance = null;
}

function checkBalance() {
    document.getElementById("balance").innerHTML =
    "Current balance: $" + currentBalance;
    document.getElementById("balance").style.display = "block";
    document.getElementById("amount").style.display = "none";
    document.getElementById("withdraw").style.display = "none";
}

function enterAmount() {
    document.getElementById("balance").style.display = "none";
    document.getElementById("withdraw").style.display = "none";
    document.getElementById("amount").style.display = "block";
    document.getElementById("newBalance").style.display = "none";
}

function deposit() {
    var amount = parseInt(document.getElementById("inputAmount").value);
    if (amount > 0 && amount <= 990) {
    currentBalance += amount;
    document.getElementById("newBalance").innerHTML =
    "New balance: $" + currentBalance;
    document.getElementById("newBalance").style.display = "block";
    } else {
    alert("Invalid amount. Please enter a value between 1 and 990.");
    }
}

function withdrawAmount() {
    document.getElementById("balance").style.display = "none";
    document.getElementById("amount").style.display = "none";
    document.getElementById("withdraw").style.display = "block";
    document.getElementById("newBalanceWithdraw").style.display = "none";
    }
    
    
    function withdraw() {
    var amount = parseInt(document.getElementById("withdrawAmount").value);
    if (amount > 0 && amount <= currentBalance - 10) {
    currentBalance -= amount;
    document.getElementById("newBalanceWithdraw").innerHTML =
    "Amount withdrawn: $" + amount + "<br>New balance: $" + currentBalance;
    document.getElementById("newBalanceWithdraw").style.display = "block";
    } else {
    alert(
    "Invalid amount. Please enter a value between 1 and " +
    (currentBalance - 10)
    );
    }
}

document.getElementById("logout").style.display = "none";
document.getElementById("options").style.display = "none";