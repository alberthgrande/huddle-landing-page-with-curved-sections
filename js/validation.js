const validBtn = document.getElementById("button");
validBtn.addEventListener("click", function () {
  const validEmail = document.getElementById("email");
  let mailformat =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (validEmail.value.match(mailformat)) {
    document.getElementById("error__message").innerText =
      "This is not a valid email address";
    // return false;
  }
});
