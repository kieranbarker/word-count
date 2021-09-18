;(function() {

  'use strict';

  //
  // Variables
  //

  // Get the text area and character count
  const textArea = document.querySelector('#text');
  const characterCount = document.querySelector('#character-count');


  //
  // Functions
  //

  /**
   * Count the number of characters
   * @returns {number} The number of characters
   */
  function countCharacters() {
    return textArea.value.length;
  }

  /**
   * Update the character count
   */
  function updateCount() {
    // Get the count
    const numChars = countCharacters();

    // Update the count
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