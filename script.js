function add() {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  const result = num1 + num2;
  document.getElementById("result").textContent = result;
}

function subtract() {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  const result = num1 - num2;
  document.getElementById("result").textContent = result;
}

function multiply() {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  const result = num1 * num2;
  document.getElementById("result").textContent = result;
}

function divide() {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  const result = num1 / num2;
  document.getElementById("result").textContent = result;
}
