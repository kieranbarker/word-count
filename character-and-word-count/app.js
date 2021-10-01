'use strict';

const textArea = document.querySelector('#text');

const wordCount = document.querySelector('#word-count');
const charCount = document.querySelector('#character-count');

function countWords() {
  const value = textArea.value.trim();
  if (!value) return 0;
  return value.split(/\s+/).length;
}

function countChars() {
  return textArea.value.length;
}

function updateCount() {
  const numWords = countWords();
  const numChars = countChars();

  wordCount.textContent = numWords.toString(10);
  charCount.textContent = numChars.toString(10);
}

updateCount();

textArea.addEventListener('input', updateCount);