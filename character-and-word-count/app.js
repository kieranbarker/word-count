'use strict';

const textArea = document.querySelector('#text');

const wordCount = document.querySelector('#word-count');
const characterCount = document.querySelector('#character-count');

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

  wordCount.textContent = numWords.toString(10);
  characterCount.textContent = numChars.toString(10);
}

updateCount();

textArea.addEventListener('input', updateCount);