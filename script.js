let display = document.getElementById('display');
function append(value) {
  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '';
}

// Optional: support keyboard input
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if ('0123456789.+-*/'.includes(key)) {
    append(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});



