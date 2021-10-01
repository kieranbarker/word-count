;(function() {

  'use strict';

  //
  // Variables
  //

  const textArea = document.querySelector('#text');
  const count = document.querySelector('#count');


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
    count.textContent = `
      You've written ${numWords.toString(10)} words
      and ${numChars.toString(10)} characters.
    `;
  }


  //
  // Inits & Event Listeners
  //

  // Set the initial count
  updateCount();

  // Handle input events
  textArea.addEventListener('input', updateCount);

})();