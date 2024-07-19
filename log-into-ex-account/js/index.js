function toggleForm() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const formTitle = document.getElementById("formTitle");

    if (loginForm.classList.contains("hidden")) {
      loginForm.classList.remove("hidden");
      signupForm.classList.add("hidden");
      formTitle.textContent = "Login Page";
    } else {
      loginForm.classList.add("hidden");
      signupForm.classList.remove("hidden");
      formTitle.textContent = "Signup Page";
    }
  }