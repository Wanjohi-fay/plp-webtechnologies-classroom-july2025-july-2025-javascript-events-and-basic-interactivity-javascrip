const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increase").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});
document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");
faqQuestion.addEventListener("click", () => {
  faqAnswer.classList.toggle("hidden");
});
const form = document.getElementById("myForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (name === "" || email === "" || password === "") {
    message.textContent = "❌ All fields are required!";
    message.style.color = "red";
    return;
  }
 const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    message.textContent = "❌ Please enter a valid email!";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "❌ Password must be at least 6 characters!";
    message.style.color = "red";
    return;
  }

  message.textContent = "✅ Form submitted successfully!";
  message.style.color = "green";
});
