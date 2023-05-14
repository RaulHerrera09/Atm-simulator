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