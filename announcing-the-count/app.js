'use strict';

const textArea = document.querySelector('#text');
const count = document.querySelector('#count');

function countWords() {
  const value = textArea.value.trim();
  if (!value) return 0;
  return value.split(/\s+/).length;
}

function countCharacters() {
  return textArea.value.length;
}

function updateCount() {
  const numWords = countWords();
  const numChars = countCharacters();

  count.textContent = `
    You've written ${numWords.toString(10)} words
    and ${numChars.toString(10)} characters.
  `;
}

updateCount();

textArea.addEventListener('input', updateCount);