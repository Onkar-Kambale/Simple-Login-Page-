const form = document.getElementById("authForm");
const formTitle = document.getElementById("form-title");
const toggleLink = document.getElementById("toggleLink");
const submitBtn = document.querySelector(".btn");

let isLogin = true;

toggleLink.addEventListener("click", (e) => {
  e.preventDefault();
  isLogin = !isLogin;

  formTitle.textContent = isLogin ? "Login" : "Signup";
  submitBtn.textContent = isLogin ? "Login" : "Signup";
  toggleLink.textContent = isLogin ? "Signup" : "Login";
  document.querySelector(".toggle-text").childNodes[0].textContent = isLogin
    ? "Don't have an account? "
    : "Already have an account? ";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("Please fill all fields!");
    return;
  }

  if (isLogin) {
    alert(`Welcome back, ${username}!`);
  } else {
    alert(`Account created for ${username}!`);
  }

  form.reset();
});
