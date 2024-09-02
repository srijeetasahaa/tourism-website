let togglePassword1 = document.getElementById("toggle-password1");

togglePassword1.addEventListener("click",function () {
    var passwordInput1 = document.getElementById ("password");
    if (passwordInput1.type === "password") {
        passwordInput1.type = "text";
    } else {
        passwordInput1.type = "password";
    }
})

let togglePassword2 = document.getElementById("toggle-password2");

togglePassword2.addEventListener("click",function () {
    var passwordInput2 = document.getElementById ("c-password");
    if (passwordInput2.type === "password") {
        passwordInput2.type = "text";
    } else {
        passwordInput2.type = "password";
    }
})

let loginBtn = document.getElementById("register-btn");
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
