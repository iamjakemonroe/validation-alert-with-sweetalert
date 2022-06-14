function validation() {
  var username = "test";
  var password = "test";

  var userName = document.getElementById("username").value;
  var passWord = document.getElementById("password").value;

  if (username == userName && password == passWord) {
    Swal.fire({
      icon: "success",
      title: "Success!",
    });
  } else if (userName == !username && passWord == !password) {
    Swal.fire({
      icon: "error",
      title: "No input field!",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Error",
      title: "Incorrect Username or Password!",
      footer: "<a href>forgotten password?</a>",
    });
  }
}
