let togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener("click", function () {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});

let loginBtn = document.getElementById("login-btn");
let popup = document.getElementById("popup");

loginBtn.addEventListener("click", function (e) {
    e.preventDefault();  // Prevent form submission initially
    
    // Validate form fields
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (email === "" || password === "") {
        alert("Please fill in all fields.");  // Alert if any field is empty
    } else {
        popup.classList.add("open-popup");  // Show popup if validation passes
    }
});

let closePopup = document.getElementById("close-popup");

closePopup.addEventListener("click", function () {
    popup.classList.remove("open-popup");
});
