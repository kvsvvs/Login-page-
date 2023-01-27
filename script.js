const togglePassword_eyeOpen = document.querySelector(
  "#togglePassword_eyeOpen"
);
const togglePassword_eyeClosed = document.querySelector(
  "#togglePassword_eyeClosed"
);

const password = document.querySelector("#id_password");

togglePassword_eyeClosed.addEventListener("click", function () {
  // toggle the type attribute

  showPassword();
  console.log(123);
});
togglePassword_eyeOpen.addEventListener("click", function () {
  // toggle the type attribute

  showPassword();
});
function showPassword() {
  if (password.getAttribute("type") === "password") {
    password.type = "text";
    togglePassword_eyeOpen.classList.remove("hidden");
    togglePassword_eyeClosed.classList.add("hidden");
    console.log(123);
  } else if (password.getAttribute("type") === "text") {
    password.type = "password";
    togglePassword_eyeClosed.classList.remove("hidden");
    togglePassword_eyeOpen.classList.add("hidden");
    console.log(456);
  }
}
