const display = document.getElementById('display');

function appendToDisplay(input) {
  // If the current display is '0' or an error, replace it with the new input
  if (display.value === '0' || display.value === 'Error') {
    display.value = input;
  } else {
    display.value += input;
  }
}

function clearDisplay() {
  display.value = '0';
}

function calculate() {
  try {
    // Use eval() to calculate the result.
    // Note: eval() can be a security risk if used with untrusted input.
    // For this controlled environment, it's acceptable.
    const result = eval(display.value);
    display.value = result;
  } catch (e) {
    display.value = 'Error';
  }
}
