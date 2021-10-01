'use strict';

const textArea = document.querySelector('#text');
const charCount = document.querySelector('#character-count');

function countChars() {
  return textArea.value.length;
}

function updateCount() {
  const numChars = countChars();
  charCount.textContent = numChars.toString(10);
}

updateCount();

textArea.addEventListener('input', updateCount);