'use strict';

const textArea = document.querySelector('#text');
const characterCount = document.querySelector('#character-count');

function countCharacters() {
  return textArea.value.length;
}

function updateCount() {
  const numChars = countCharacters();
  characterCount.textContent = numChars.toString(10);
}

updateCount();

textArea.addEventListener('input', updateCount);