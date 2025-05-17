const display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    // Evaluate the expression using Function for safety instead of eval
    // Note: For a real-world app, consider using a math parser library.
    display.value = Function('"use strict";return (' + display.value + ')')();
  } catch {
    display.value = 'Error';
  }
}