;(function() {

  'use strict';

  //
  // Variables
  //

  // Get the text area
  const textArea = document.querySelector('#text');

  // Get the word and character counts
  const wordCount = document.querySelector('#word-count');
  const characterCount = document.querySelector('#character-count');


  //
  // Functions
  //

  /**
   * Count the number of words
   * @returns {number} The number of words
   */
  function countWords() {
    // Trim whitespace from the value
    const value = textArea.value.trim();

    // If it's an empty string, return zero
    if (!value) return 0;

    // Otherwise, return the word count
    return value.split(/\s+/).length;
  }

  /**
   * Count the number of characters
   * @returns {number} The number of characters
   */
  function countCharacters() {
    return textArea.value.length;
  }


  /**
   * Update the count
   */
  function updateCount() {
    // Get the count
    const numWords = countWords();
    const numChars = countCharacters();

    // Update the count
    wordCount.textContent = numWords.toString(10);
    characterCount.textContent = numChars.toString(10);
  }


  //
  // Inits & Event Listeners
  //

  // Set the initial count
  updateCount();

  // Handle input events
  textArea.addEventListener('input', updateCount);

})();