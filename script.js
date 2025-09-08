// 🌗 Toggle Light/Dark Mode
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🎯 Counter Button
let count = 0;
document.getElementById("counterBtn").addEventListener("click", () => {
  count++;
  document.getElementById("count").textContent = count;
});

// 📋 Form Validation
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("formMessage");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
    message.textContent = "Name is required.";
    message.style.color = "red";
  } else if (!emailRegex.test(email)) {
    message.textContent = "Please enter a valid email.";
    message.style.color = "red";
  } else if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters.";
    message.style.color = "red";
  } else {
    message.textContent = "Form submitted successfully! ✅";
    message.style.color = "green";
  }
});

