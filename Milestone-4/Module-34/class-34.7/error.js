function clickEvent() {
  const inputField = document.getElementById("age").value;
  const age = parseInt(inputField);
  const error = document.getElementById("error");

  try {
    if (isNaN(age)) {
      throw "please enter number";
    } else if (age < 18) {
      throw "you are Teenage";
    } else if (age > 30) {
      throw "Morobbi is not allow";
    }
    error.innerText = "";
  } catch (err) {
    console.error(err);
    error.innerText = "ERROR :" + err;
  } finally {
    console.log("All is done");
  }
}
