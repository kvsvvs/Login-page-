const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#id_password");

togglePassword.addEventListener("click", function () {
  // toggle the type attribute

  showPassword();
  console.log(123);
});
function showPassword() {
  if (password.getAttribute("type") === "password") {
    password.type = "text";
  } else {
    password.getAttribute("type") === "text";
    password.type = "password";
  }
}
